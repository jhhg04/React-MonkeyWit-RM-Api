import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

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

  return <Navbar brand='rick & Morty' />;
}

export default App;
