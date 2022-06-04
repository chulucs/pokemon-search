import classes from "./Pokedex.module.scss";
import PokeDescription from "./PokeDescription";

const Pokedex = (props) => {
  console.log(props.pokemon);
  
  return (
    <div data-testid="pokedex" className={classes.pokedex}>
      <div className={classes["pokedex-info"]}>
        {props.pokemon.map((data) => (
          <PokeDescription
            key={data.id}
            imagem={data.sprites.front_default}
            altura={data.height}
            peso={data.weight}
            habilidade={data.abilities}
            tipo={data.types[0].type.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
