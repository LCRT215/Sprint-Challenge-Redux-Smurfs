import React from "react";

const Smurfs = props => {
  return (
    <ul>
      {props.smurfs &&
        props.smurfs.map(smurf => {
          return <Character key={character.name} character={character} />;
        })}
    </ul>
  );
};

export default Smurfs;
