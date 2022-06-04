import { useState, useEffect } from "react";
import classes from "./PokeList.module.scss";
import axios from "axios";
import PokeIndividual from "../PokeIndividual/PokeIndividual";

const PokeList = ({ posts, onClick }) => {
  
  const pokeInfoOnclick = (data) => {
    onClick(data);
  }

  return (
    <div className={classes["pokemon-list"]}>
      {posts.map((post) => (
        <PokeIndividual key={post.name} name={post.name} url={post.url} getInfo={pokeInfoOnclick}/>
      ))}
    </div>
  );
};

export default PokeList;
