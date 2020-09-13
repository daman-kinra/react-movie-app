import React, {useState}from 'react';
import './App.css';
const api ={
  url: 'https://www.omdbapi.com/',
  key: '9b078dd9'
}

function App() {
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState({});
  const [page, setPage] = useState(2);  //It will be used for pagination
  const [called, setcalled] = useState('');


  
  const search = (evt) =>{
    if(evt.key==="Enter"){
    fetch(`${api.url}?apikey=${api.key}&s=${query}`)
    .then(res => res.json())
    .then(result =>{
      setMovie(result);
      setcalled(query);
      setQuery('');
    });
  }
  }
  const search1 =()=>{
    fetch(`${api.url}?apikey=${api.key}&s=${query}`)
    .then(res => res.json())
    .then(result =>{
      setMovie(result);
      setcalled(query);
      setQuery('');
    });
  }
  const search2 =()=>{
    if(page>=0){
      if(page==0){page=1}
      setPage(page+1);
    fetch(`${api.url}?apikey=${api.key}&s=${called}&page=${page}`)
    .then(res => res.json())
    .then(result =>{
      setMovie(result);
      
    });}
  }

  const search3 =()=>{
    if(page>=1){
      setPage(page-1);
      if(page==0){
        page=1;
      }
    fetch(`${api.url}?apikey=${api.key}&s=${called}&page=${page}`)
    .then(res => res.json())
    .then(result =>{
      setMovie(result);
      

    });}
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
        <div className="re-box-vov">
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
          <div className="nexprev">
          <button className="btn btn1" onClick={search3}>Prev</button>
          <button className="btn btn1" onClick={search2}>Next</button>
          </div>
        </div>
      ):('')}
    </div>
  );
}

export default App;
