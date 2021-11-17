import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FavPlace.css";

export default function FavPlace({ userId }) {
  const [favoriteList, setFavoriteList] = useState([]);

  const getId = JSON.parse(localStorage.getItem("Current id"))

  useEffect(async () => {
    // console.log(getId);

    const response = await axios.get(
      `http://localhost:5000/list-fav-places${getId}`
    );
    setFavoriteList(response.data[0]);
    // console.log(response.data);
  }, []);

  const unLike = async(header) => {
    // console.log(header,"header DDDD")
    // console.log(userId,"IIIIIDDDDD")
    const response = await axios.delete(`http://localhost:5000/unlike${userId}`, { 
      data: { header: header } 
      // header:header,
    })
    console.log(response.data,"response.data");
    setFavoriteList(response.data)
  }

  // const favPlace = async (index) => {
  //   const response = await axios.post(`http://localhost:5000//fav${index}`);
  //   console.log(response.data);
  // };

  return (
    <div>

      <div>
        {/* {console.log(favoriteList)} */}
        {console.log(getId,"getId")}
        {console.log(userId,"userId")}
    
        {favoriteList.map((elem, index) => {
          return (
            // <div onClick={()=>{<Link to="/sign-up"/>}} key={index}>
            <div className="containerLikes" key={index}>
              <img src={elem.imgUrl} />
              <span
                // className="like-fav-places"
                onClick={() => {
                  unLike(elem.header);
                }}
              >
                ♥
              </span>
              <hr />
              {/* <h3
              // onClick={() => {
              //   goToCard(index);
              // }}
              >
                {elem.header}
              </h3> */}
              {/* <p>{elem.paragraph}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
