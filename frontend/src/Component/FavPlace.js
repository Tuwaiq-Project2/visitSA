import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FavPlace.css";

export default function FavPlace() {
  const [favoriteList, setFavoriteList] = useState([]);

  useEffect(async () => {
    const response = await axios.get("http://localhost:5000/favPlace");
    setFavoriteList(response.data);
  }, []);

  const unLike = async(header) => {
    const response = await axios.delete(`http://localhost:5000/unlike${header}`)
    setFavoriteList(response.data)
  }

  // const favPlace = async (index) => {
  //   const response = await axios.post(`http://localhost:5000//fav${index}`);
  //   console.log(response.data);
  // };

  return (
    <div>        
        <div>
            {favoriteList.map((elem, index) => {
              return (
                <div className="containerLikes" key={index}>
                  <img src={elem.imgUrl} />
                  <h3>{elem.header}</h3>
                  <span
                    onClick={() => {
                      unLike(elem.header);
                      // favPlace(index);
                    }}
                  >
                    ♥
                  </span>
                </div>
              );
            })}
      </div>
    </div>
  );
}