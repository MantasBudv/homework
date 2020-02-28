import React, {useState, useEffect} from 'react';
import movieIcon from './icons/movie.svg';
import searchIcon from './icons/search.svg';

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const apiKey = '0d720d9ec399cd0d44f361e8a7dc9255';
  const handleSearch = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}`)
    .then(response => response.json())
    .then(data => {
      setMovies(data.results)
    })
    .catch((error) => {
      console.log('Could not fetch products from the API.');
    })
  }
  const handleQuery = (movie) => {
    setQuery(movie);
  }
  useEffect(() => {
    /*ApiFactory.getInstance().get('/api/products')
    .then(({ data }) => {
    setProducts(data);
    })*/console.log(query)
  }, [query.length]);
  return (
    <div className="search-page">
      <div className="nav">
        <div className="nav__container">
          <div className="nav__container__search">
            <img className="nav__container__search__movie" src={movieIcon} alt="Movie icon">
            </img>
            <input className="nav__container__search__input" type="text" placeholder="Enter movie name"
            onChange= { (e) => handleQuery(e.target.value)}/>
          </div>
          <a className="nav__container__search-button" onClick = { () => handleSearch() }>
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
