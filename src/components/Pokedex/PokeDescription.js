import classes from "./PokeDescription.module.scss";

const PokeDescription = (props) => {
  return (
    <div className={classes["pokedex-info__description"]}>
      <img src={props.imagem} alt="a foto do pokemon buscado" />
      <div className={classes["pokedex-info__type"]}>Type: <span>{props.tipo}</span></div>
      <div className={classes["pokedex-info__altura"]}>
        Altura: {props.altura * 10} cm
      </div>
      <div className={classes["pokedex-info__peso"]}>Peso: {props.peso / 10} kg</div>
      <div className={classes["pokedex-info__habilidades"]}>
        Habilidades:
        {props.habilidade.map((item) => (
          <div
            className={classes["pokedex-info__habilidade"]}
            key={item.ability.name}
          >
            {item.ability.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokeDescription;
