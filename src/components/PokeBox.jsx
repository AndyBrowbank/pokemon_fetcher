import React from "react";

const PokeBox = (props) => {
  return (
    <div>
      <p id="pokeBox">
        <img className="pokemon" src={props.image}></img>
        <h3>
          <strong>{props.name}</strong>
        </h3>
      </p>
    </div>
  );
};

export default PokeBox;
