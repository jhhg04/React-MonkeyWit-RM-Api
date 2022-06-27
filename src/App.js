import { useEffect, useState } from 'react';
import Characters from './components/Characters';
import Navbar from './components/Navbar';
import Pagination from './components/Pagination';

function App() {
  const [characters, setCharacters] = useState([]);
  const initialUrl = 'https://rickandmortyapi.com/api/character';
  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <>
      <Navbar brand='rick & Morty' />
      <div className='container mt-5'>
        <Pagination />
        <Characters characters={characters} />
      </div>
    </>
  );
}

export default App;
