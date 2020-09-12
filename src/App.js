import React, {useState}from 'react';
import './App.css';
const api ={
  url: 'https://www.omdbapi.com/',
  key: '9b078dd9'
}

function App() {
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState({});
  // const [page, setPage] = useState(1);  It will be used for pagination


  const search = (evt) =>{
    if(evt.key==="Enter"){
    fetch(`${api.url}?apikey=${api.key}&s=${query}`)
    .then(res => res.json())
    .then(result =>{
      setMovie(result);
      setQuery('');
        console.log(result);
    });
  }
  }
  const search1 =()=>{
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
      <div className="searchbox">
      <input type="text"
      className="search-bar"
      onChange={e=> setQuery(e.target.value)}
      value={query}
      onKeyPress={search}
      placeholder="Search..."
      />
      <button onClick={search1} className="btn">Search</button>
      </div>
      {(movie.Response==="True")?(
        <div className="res-box">
          {movie.Search.map((items)=>{
            return(
              <div className="card-cov">
            <div className="card">
              <div className="img-box">
                <img src={items.Poster} alt="Poster Not Avilable"/>
              </div>
              <div className="detail-cont">
              <div className="details">
                 <div className="title">{items.Title}</div>
              </div>
              <div className="det">
                 <div className="type">{items.Type}</div>
                 <div className="year">{items.Year}</div>
                 </div>
            </div>
            </div>
            </div>
            )
          })}
        </div>
      ):('')}
    </div>
  );
}

export default App;
