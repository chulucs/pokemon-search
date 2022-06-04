import { useState, Fragment, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Pokedex from "./components/Pokedex/Pokedex";
import PokeForm from "./components/PokeForm/PokeForm";

import classes from "./App.module.scss";
import Pagination from "./components/Pagination/Pagination";
import PokeList from "./components/PokeList/PokeList";

function App() {
  const [pokeInfo, setPokeinfo] = useState([]);
  const [pokeSearch, setPokeSearch] = useState([]);
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const accessAPI = async (url) => {
    try {
      const res = await axios.get(url);
      
      if (res.status === 200) {
        setIsValid(true);
        return res.data;
      } else {
        throw new Error("Falha ao encontrar pokemon!");
      }
    } catch (err) {
      setIsValid(false);
      console.log(err);
    }
  };

  const getPokemonDataHandler = async (pokemon) => {
    setIsLoading(true);
    const arrayHelper = [];
    const pokemonData = await accessAPI(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    setIsLoading(false);
    console.log(pokemonData);
    if (pokemonData) {
      arrayHelper.push(pokemonData);
      setPokeSearch(arrayHelper);
    }else return;
  };

    const infoOnclickHandler = (data) => {
      setPokeSearch([{...data}]);
      setIsValid(true);
    }

   // Get current posts
   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = pokeInfo.slice(indexOfFirstPost, indexOfLastPost);

   // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=160`);
      setPokeinfo(res.data.results);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <Fragment>
      <Header />
      <PokeForm onGetPokemon={getPokemonDataHandler} />
      {!isValid && <p className={classes.p}>Favor colocar nomes válidos de Pokemon</p>}
      {isLoading && <p className={classes.p1}>Loading...</p>}
      {isValid && <Pokedex pokemon={pokeSearch} />}
      <PokeList posts={currentPosts} onClick={infoOnclickHandler}/>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={pokeInfo.length}
        paginate={paginate}
      />
    </Fragment>
  );
}

export default App;
