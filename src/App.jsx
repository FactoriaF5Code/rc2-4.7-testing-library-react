import './App.css'
import { DeleteButton } from './components/DeleteButton';
import { Movie } from './components/Movie';
import { Panel } from './components/Panel'

function App() {

  const movies = [
    { title: "Inception", year: "2010" },
    { title: "The Matrix", year: "1999" },
    { title: "Interstellar", year: "2014" },
    { title: "The Lord of the Rings: The Fellowship of the Ring", year: "2001" },
    { title: "Forrest Gump", year: "1994" }
  ];

  return (
    <>
      {movies.map(m =>
        <>
        <Movie {...m} />
          <DeleteButton />
        </>)}
    </>
  );
}

export default App
