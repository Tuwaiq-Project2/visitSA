import axios from "axios";
import React, { useState, useEffect } from "react";
import FavPlace from "./FavPlace";
import "./MustToVisit.css";

export default function MustToVisit() {
  const [cardsArr, setCardsArr] = useState([]);

  useEffect(async () => {
    const response = await axios.get("http://localhost:5000/");
    setCardsArr(response.data);
  }, []);

  const favPlace = async (index) => {
    const response = await axios.post(`http://localhost:5000/${index}`);
    console.log(response.data);
  };

  return (
    <div>
      <div className="container">
        {cardsArr.map((elem, index) => {
          return (
            <div key={index}>
              <img src={elem.imgUrl} />
              <span className="like"
                onClick={() => {
                  favPlace(index);
                }}
              >
                ♥
              </span>
              <hr />
              <h3>{elem.header}</h3>
              <p>{elem.paragraph}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
