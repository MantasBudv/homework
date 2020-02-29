import React, {useState, useEffect} from 'react';
import movieIcon from './icons/movie.svg';
import searchIcon from './icons/search.svg';

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(false);
  const apiKey = '0d720d9ec399cd0d44f361e8a7dc9255';
  
  const handleSearch = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}`)
    .then(response => response.json())
    .then(data => {
      if (data.results.length > 8) {
        data.results = data.results.slice(0,8);
      }
      setMovies(data.results)
    })
    .catch((error) => {
      console.log('Unnable to read data from the api! Error message : ' + error);
    });
  }

  const handleQuery = (query) => {
      setQuery(query); 
  }

  useEffect(() => {
    if(query.length > 2 && selected === false) {
      handleSearch();
    } else {setMovies([])}
  }, [query, selected]);

  return (
    <div className="search-page">
      <div className="nav">
        <div className="nav__container">
          <div className="search-list">
            <div className="nav__container__search" style={query.length > 0 && selected === false ? {backgroundColor: '#fff'} : {backgroundColor: 'rgba(255,255,255,0.2)'}}>
              <img className="nav__container__search__movie" src={movieIcon} alt="Movie icon" style={query.length > 0 && selected === false ? {filter: 'none'} : {filter: 'invert(100%)'}}/>
              <input className="nav__container__search__input" value={query} type="text" placeholder="Enter movie name" onChange= { (e) => {handleQuery(e.target.value); setSelected(false)}}
              style={selected ? {color: '#fff'} : {color: '#000'}}/>
            </div>
            <div className="dropdown-list" style={movies.length > 0 ? {boxShadow: '0px 2px 0px #D3D3D3'} : {boxShadow: 'none', border: '0'}}>
            {
              movies.map( ({original_title, vote_average, release_date}, movieIdx) => {
                return (
                    <a className="dropdown-list__item" key={movieIdx} onClick = { () => {handleQuery(original_title); setSelected(true)}}>
                      <div className="dropdown-list__item__name">{original_title}</div>
                      <div className="dropdown-list__item__info">{vote_average} Rating, {release_date && release_date.slice(0,4)}</div>
                    </a>
                );
              })
             }
            </div>
          </div>
          <a className="nav__container__search-button">
            <img src={searchIcon} alt="Search button" className="nav__container__search-button__icon"/>
          </a>
        </div>
      </div>
      <div className="movies">
        
      </div>
    </div>
  );
}

export default App;
