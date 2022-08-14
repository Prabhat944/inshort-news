import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import API from './components/config/config';
import {useState} from 'react';
import { useEffect } from 'react';
import NewsContent from './components/NewsContent/NewsContent';
import Footer from './components/Footer/Footer';

function App() {
  const [category,setCategory]=useState('general');
  const [newsArray,setNewsArray]=useState([]);
  const [newsResult,setNewsResult]=useState();
  const [loadMore,setLoadMore]=useState(10);
  
    const newsApi=async()=>{
      
      try{
        // const proxyUrl='https://cors-anywhere.herokuapp.com/';
      const news=await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API}&category=${category}&pageSize=${loadMore}`);
      setNewsArray(news.data.articles);
      setNewsResult(news.data.totalResults);
  }
  catch(error){console.log(error)}
};
useEffect(()=>{
  newsApi(); 
  // eslint-disable-next-line
},[category,newsResult,loadMore]);
  return (
    <div className="App">
    <Navbar setCategory={setCategory}/>
    <NewsContent 
            newsArray={newsArray} 
            newsResult={newsResult} 
            loadMore={loadMore} 
            setLoadMore={setLoadMore}/>
    <Footer/>
    </div>
  );
}

export default App;
