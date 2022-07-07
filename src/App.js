import NewsList from "./components/NewsList/NewsList";
import NavbarComponent from "./components/NavbarComponent";
import SingleNews from "./components/SingleNews";
import Counter from "./components/Counter";

import store from './redux/store'

import { BrowserRouter, Routes, Route} from 'react-router-dom'

import { Provider } from 'react-redux'


const App = () => {

    return(
        <Provider store = {store}>
        <BrowserRouter>
            <NavbarComponent/>
            <Routes>
                <Route path="/" element={<NewsList/>}/>
                <Route path="/news/:id" element={<SingleNews/>}/>
                <Route path="/counter" element={<Counter/>}/>
            </Routes>
        </BrowserRouter>
        </Provider>
    )
}

export default App;