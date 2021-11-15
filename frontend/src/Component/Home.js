import React, { useState } from "react";
import ReactPlayer from "react-player";
// import "./Home.css"
import "./Home.css"
// import img from "./saudiV2.jpg";

export default function Home() {

    const [showVid, setShowVid] = useState(false)

    const sratr = () => {
      setShowVid(!showVid)
    }
    
    return (
      <div className="background">
        <h1>Welcome to our page</h1>
        <hr />
        <button onClick={() => { sratr() }}>▶</button>
        {showVid ? <div>
          <ReactPlayer className="ved"
            url="https://www.youtube.com/watch?v=tQTcbTq9f-k"
          />
        </div> : ""}
      </div>
    );
  }