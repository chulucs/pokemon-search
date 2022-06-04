import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import classes from "./PokeIndividual.module.scss";

const PokeIndividual = (props) => {
  const [img, setImg] = useState("");
  const {name, url} = props;

  const getPokemonDataInfo = useCallback(async (url) => {
    try {
      const res = await axios.get(url);
      //setImg(res.data.sprites.front_default);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  },[]);

  const showPokemonInfo = () => {
    console.log("clicou!", name);
    getPokemonDataInfo(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(data => props.getInfo(data));
  }

  useEffect(() => {
    
    getPokemonDataInfo(url).then(data => setImg(data.sprites.front_default));
    
  }, [url, getPokemonDataInfo]);

  return (
    <div className={classes["pokemon-list__item"]} onClick={showPokemonInfo}>
      <img src={img} alt="A imagem do pokemon" />
      {name}
    </div>
  );
};

export default PokeIndividual;
