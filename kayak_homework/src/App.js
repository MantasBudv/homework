import React, {useState, useEffect} from 'react';

function App() {
  const [products, setProducts] = useState([]);
  return (
    <div className="search-page">
      <div className="nav">
        <div className="nav__container">
          <div className="nav__container__search">
            <a className="nav__movie">

            </a>
            <input
            type="text"
            placeholder="Enter movie name"
            />
          </div>
          <a className="nav__search">

          </a>
        </div>
      </div>
      <div className="movies">

      </div>
    </div>
  );
}

export default App;
