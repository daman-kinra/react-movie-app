import React, {useState}from 'react';
import './App.css';
const api ={
  url: 'http://www.omdbapi.com/',
  key: '9b078dd9'
}

function App() {
  const [query, setQuery] = useState('batman');
  const [movie, setMovie] = useState({});
  const [page, setPage] = useState(1);

  const search = () =>{
    fetch(`${api.url}?apikey=${api.key}&s=${query}`)
    .then(res => res.json())
    .then(result =>{
      setMovie(result);
      setQuery('');
        console.log(result);
    });
  }
  return (
    <div className="app">

    </div>
  );
}

export default App;
