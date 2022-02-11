import pluralize from "pluralize";
import "./Card.css";
import { getSeasonSuivante } from "./getSeason";
import React from "react";
import { getImage } from "./images/getImage";

function NextSeason() {
  const { dateSaisonNext, depuisNext, dureeNext } = getSeasonSuivante(
    new Date()
  );
  return (
    <div className="card">
      <div className="card__header">
        <img
          src={getImage(dateSaisonNext.season)}
          alt="card__image"
          className="card__image"
          width="600"
        />
      </div>
      <div className="card__body">
        <span className="tag tag-blue">{dateSaisonNext.season}</span>
        <span className="tag-sm tag-brown ">
          {pluralize("jour", Math.abs(dureeNext), true)}{" "}
        </span>
        <h4 className={"text-center"}>{depuisNext}</h4>
      </div>
    </div>
  );
}

export default NextSeason;
