import { useRef } from "react";
import classes from "./PokeForm.module.scss";

const PokeForm = (props) => {
  const pokemonName = useRef();
  
  const submitFormHandler = (e) => {
    e.preventDefault();
    if (pokemonName.current.value.trim() === "") {
      return;
    }
    props.onGetPokemon(pokemonName.current.value.toLowerCase());
    pokemonName.current.value = "";
  }

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <label htmlFor="pokemon">Pokemon:</label>
      <input
        type="text"
        id="pokemon"
        data-testid="pokemon"
        placeholder="Enter pokemon name.. and press enter"
        ref={pokemonName}
      />
    </form>
  );
};

export default PokeForm;
