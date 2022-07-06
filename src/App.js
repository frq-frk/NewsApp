import NewsList from "./components/NewsList/NewsList";
import NavbarComponent from "./components/NavbarComponent";
import SingleNews from "./components/SingleNews";

import { useEffect, useState } from 'react'
import axios from 'axios'

import { BrowserRouter, Routes, Route} from 'react-router-dom'


const App = () => {

    const [news,setNews] = useState([]);

    useEffect(()=>{

        const getData = async () => {

            const res = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7fafb1b6d9c341fa905d63c3239c8566')
            // console.log(res.data.articles);
            setNews(res.data.articles);
        }

        getData();

    },[])


    return(
        <BrowserRouter>
            <NavbarComponent/>
            <Routes>
                <Route path="/" element={<NewsList news={news}/>}/>
                <Route path="/news/:id" element={<SingleNews news={news}/>}/>
            </Routes>
             
        </BrowserRouter>
    )
}

export default App;