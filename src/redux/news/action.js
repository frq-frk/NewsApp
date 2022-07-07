import axios from 'axios';

export const FETCH_NEWS_REQUESTED = 'FETCH_NEWS_REQUESTED'
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS'
export const FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR'

export const fetchNewsRequested = () =>({
    type : FETCH_NEWS_REQUESTED
})

export const fetchNewsSuccess = (newsList) =>({
    type : FETCH_NEWS_SUCCESS,
    payload : newsList
})

export const fetchNewsError = (errorMessage) =>({
    type : FETCH_NEWS_ERROR,
    payload : errorMessage
})

export const fetchNews = () =>{
    return async(dispatch, getState) => {
        try{
            dispatch(fetchNewsRequested())
            const res = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7fafb1b6d9c341fa905d63c3239c8566');

            dispatch(fetchNewsSuccess(res.data.articles));

        }catch(e){
            dispatch(fetchNewsError(e.message))
        }
    }
}