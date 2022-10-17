
import { useState } from "react";
import './Haustier.css';

const Haustier = (props) => {
  let hero = "https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/612/original/DCI__logo_wordmark_blue.png";

  if (props.images.length > 0) {
    hero = props.images[0];
  }

  return (
    <div className="haustier-container">
      <img src={hero} alt={props.name} width="300" />
      <div>
        <h1>{props.name}</h1>
        <h2>{props.animal}</h2>
        <h2>{props.breed}</h2>
      </div>
    </div>
  );
};

export default Haustier;