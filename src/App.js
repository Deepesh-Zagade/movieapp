
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import { useState } from 'react';
import axios from "axios";
import Movieinfo from "./components/Movieinfo";


function App() {
  const [search, updateSearch] = useState();
  const [temp, setTemp] = useState();
  const [movielist,setMovielist] = useState([]);
  const [selectedmovie,setSelectedmovie] = useState();

  const fetchapi = async (searchword) => {
    // console.log(searchword)
    let response = await axios.get(`https://www.omdbapi.com/?&s=${searchword}&apikey=4e0ab1c5`)
    console.log(response)
    setMovielist(response.data.Search)
    // console.log(movielist)
  }
  const Ontextchange = (event) => {
    clearTimeout(temp)
    updateSearch(event.target.search)
    const timeout = setTimeout(() => { fetchapi(event.target.value) }, 1000);
    setTemp(timeout)
  }
  return (
    <>
      <div className="App">
        <Navbar search={search} Ontextchange={Ontextchange} />
        {selectedmovie&& <Movieinfo selectedmovie={selectedmovie} setSelectedmovie={setSelectedmovie} /> }  
        <Movies movielist={movielist} setSelectedmovie={setSelectedmovie} />
      </div>
    </>
  );
}

export default App;
