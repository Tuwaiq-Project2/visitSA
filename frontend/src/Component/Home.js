import React, { useState } from "react";
import ReactPlayer from "react-player";
// import "./Home.css"
import "./Home.css"
// import MustToVisit from "./MustToVisit"
import header from "./saudiV2.png"
import { Link } from "react-router-dom";
// import img from "./saudiV2.jpg";

export default function Home() {

    const [showVid, setShowVid] = useState(false)

    const mustToVisit = [
      {header:"The Cultural Hub", paragraph:"A cultural delight for all the tourists and business travelers alike, Riyadh is a heart of Saudi Arabia which has retained its traditional charm even after being modernized.", imgUrl: "https://www.myholidays.com/blog/content/images/2020/10/Riyadh--The-Cultural-Hub-in-Saudi-Arabia.jpg"},
      {header:"Ithra’s Library", paragraph:"a dynamic place of learning and activity. Our library is designed to foster individual and collaborative learning while nurturing a love of reading, discovery and the pursuit of knowledge.", imgUrl: "https://www.myholidays.com/blog/content/images/2020/10/Riyadh--The-Cultural-Hub-in-Saudi-Arabia.jpg"},
      {header:"Umluj is Maldives of Saudi Arabia", paragraph:"Is a small town in the northwest of Saudi Arabia 150 km north of Yanbu and right next to the Red Sea", imgUrl: "https://insidesaudi.com/wp-content/uploads/2019/04/Umluj-Islamd.jpg"},
    ];

    const sratr = () => {
      setShowVid(!showVid)
    }

    return (
      <div className="background">
                  <button className="button-start" onClick={() => { sratr() }}>▶</button>

          {showVid ? <div>
            <iframe
        src={`https://www.youtube.com/embed/GOqUXlnNuhg`}
      ></iframe>
        </div> : 
        <img className="img-header" src={header} />
        }
        <h1 className="header-home">Welcome to our page</h1>
        <hr />
        
        <div className="container-home-page">
          {
            mustToVisit.map((elem,index)=>{
              return (
                <div key={index}>
                  <img src={elem.imgUrl} />
                  <span className="like">
                    ♥
                  </span>
                  <hr />
                  <h3>{elem.header}</h3>
                  <p>{elem.paragraph}</p>
                </div>
              )
            })
          }
          <Link to="/mustovisit">
                <span className="show-more-link">
                  Show more
                </span>
              </Link>
        </div>
      </div>
    );
  }