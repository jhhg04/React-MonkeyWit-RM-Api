import { useEffect, useState } from 'react';
import Characters from './components/Characters';
import Navbar from './components/Navbar';
import Pagination from './components/Pagination';

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialUrl = 'https://rickandmortyapi.com/api/character';

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onBack = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <>
      <Navbar brand='rick & Morty' />
      <div className='container mt-5'>
        <Pagination
          prev={info.prev}
          next={info.next}
          onBack={onBack}
          onNext={onNext}
        />
        <Characters characters={characters} />
      </div>
    </>
  );
}

export default App;
