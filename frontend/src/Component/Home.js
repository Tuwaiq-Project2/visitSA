import React, { useState } from "react";
// import ReactPlayer from "react-player";
// import "./Home.css"
import "./Home.css"
// import MustToVisit from "./MustToVisit"
import header from "./saudiV2.png"
import { Link } from "react-router-dom";
import youtubeIcon from "./youtube.png"
import twitterIcon from "./twitter.png"
import emailIcon from "./email.png"
// import img from "./saudiV2.jpg";

export default function Home() {

    const [showVid, setShowVid] = useState(false)

    const mustToVisit = [
      {header:"MECCA city", paragraph:"Visiting Mecca to perform the Hajj is obligatory for all able Muslims. The Great Mosque of Mecca, known as the Grand Mosque, is the home of the Kaaba that Muslims believe Abraham and Ismail built. It is one of the holiest places in Islam and is the direction of prayer for all Muslims.", imgUrl: "https://www.urbookings.com/wp-content/uploads/2020/01/swissotel-al-maqam.jpg"},
      {header:"Ithra’s Library", paragraph:"a dynamic place of learning and activity. Our library is designed to foster individual and collaborative learning while nurturing a love of reading, discovery and the pursuit of knowledge.", imgUrl: "https://vid.alarabiya.net/images/2018/08/25/9cb5bc89-1a16-44df-859b-00d9d4422a25/9cb5bc89-1a16-44df-859b-00d9d4422a25_16x9_1200x676.jpg?width=1138"},
      {header:"Umluj is Maldives of Saudi Arabia", paragraph:"Is a small town in the northwest of Saudi Arabia 150 km north of Yanbu and right next to the Red Sea", imgUrl: "https://insidesaudi.com/wp-content/uploads/2019/04/Umluj-Islamd.jpg"},
    ];

    const sratr = () => {
      setShowVid(!showVid)
    }

    return (
      <div className="background">
                  {/* <button className="button-start" onClick={() => { sratr() }}>▶</button> */}

          {showVid ? <div>
            <button className="button-start" onClick={() => { sratr() }}>▶||</button>
            <iframe
        src={`https://www.youtube.com/embed/GOqUXlnNuhg`}
      ></iframe>
        </div> : <div>
        <button className="button-start" onClick={() => { sratr() }}>▶</button>

        <img className="img-header" src={header} />
        </div>
        }
        <h1 className="header-home">Welcome in the inspired kingdom</h1>
        <hr />
        
        <div className="container-home-page">
          {
            mustToVisit.map((elem,index)=>{
              return (
                <div key={index}>
                  <img src={elem.imgUrl} />
                  {/* <span className="like">
                    ♥
                  </span> */}
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

<hr />
        <div className="contact-us">
          <h3>Contact:</h3>
          {/* <hr /> */}
          <div className="icons-to-contact">
            <img src={youtubeIcon} alt="Youtube Icon" />
            <span>/VisitSA</span> <br /><br />
            <img src={twitterIcon} alt="Twitter Icon" />
            <span>/VisitSaudiAR</span> <br /><br />
            <img src={emailIcon} alt="Email Icon" />
            <span>visit.sa@gmail.com</span>
          </div>

          <div className="Copyright">
          Copyright © 2021 all rights reserved by VisitSA team.
          </div>

        </div>
      </div>
    );
  }