import axios from "axios";
import React, { useState, useEffect } from "react";
import "./MustToVisit.css";

export default function MustToVisit() {
  const [cardsArr, setCardsArr] = useState([]);
  const [inputValue, setInputValue] = useState("")
  const [searchArr, setSearchArr] = useState([])

  useEffect(async () => {
    const response = await axios.get("http://localhost:5000/");
    setCardsArr(response.data);
  }, []);

  const favPlace = async (elem,index) => {

    // get fav arr include?
    // if no , complete



    // if(elem.header == element inside Array(fav)){
      // return;
      // splice then return
    // }

    // if()

    // console.log(elem.header)

    // for(let i=0; i<cardsArr.length; i++){
    //   // console.log(cardsArr[i].header)
    //   if(cardsArr[i].header == elem.header){
    //     // console.log(cardsArr[i].header)
    //     // console.log(elem.header)

    //     return;
    //   }
    // }
        // console.log(cardsArr[0].header)
        // console.log(elem.header)

    // const response = await axios.post(`http://localhost:5000/add-fav${index}`)
    const response = await axios.get("http://localhost:5000/favPlace");
    const newArr = response.data
    for(let i=0 ; i<newArr.length ; i++){
      if(newArr[i].header == elem.header){
        const res = await axios.delete(`http://localhost:5000/unlike${newArr[i].header}`)
        return
      }
    }
    
    const resPost = await axios.post(`http://localhost:5000/add-fav${index}`)



    console.log(response.data);
    // setCardsArr(response.data)

    // const copiedArr = [...cardsArr]
    // copiedArr.push()
  };

  const saveInputValue=(e)=>{
    setInputValue(e.target.value)
  }

  const searchInPlaces = async()=>{
    
    const respones=await axios.get("http://localhost:5000/")
    const dataArr=respones.data
    const copiedOfSearch=[]
  console.log("dataArr",dataArr);
    for(let i=0;i<dataArr.length;i++){
      if(inputValue==dataArr[i].header){ 
        copiedOfSearch.push(dataArr[i])
      }

    }
    
  console.log("hhhhhh",copiedOfSearch);

    setSearchArr(copiedOfSearch)

  }

  return (
    <div>
      <div className="div-search">
        <input onChange={(e)=>{saveInputValue(e)}} className="input-search" type="text" placeholder="SEARCH" />
        <button onClick={()=>{searchInPlaces()}} className="button-search">SEARCH</button>
      </div>
      
      <div className="container">
        {searchArr.length?  searchArr.map((elem, index) => {
          return (
            <div key={index}>
              <img src={elem.imgUrl} />
              <span className="like"
                onClick={() => {
                  favPlace(elem,index);
                }}
              >
                ♥
              </span>
              <hr />
              <h3>{elem.header}</h3>
              <p>{elem.paragraph}</p>
            </div>
          );
        })
        :
        cardsArr.map((elem, index) => {
          return (
            <div key={index}>
              <img src={elem.imgUrl} />
              <span className="like"
                onClick={() => {
                  favPlace(elem,index);
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
