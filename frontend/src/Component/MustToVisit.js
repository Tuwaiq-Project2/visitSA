import axios from 'axios'
import React, {useState,useEffect} from 'react'
import FavPlace from './FavPlace'
import "./MustToVisit.css"

export default function MustToVisit() {

    const [cardsArr, setCardsArr] = useState([])

    // const cardsArr = [
    //     {header:"The Cultural Hub", paragraph:"A cultural delight for all the tourists and business travelers alike, Riyadh is a heart of Saudi Arabia which has retained its traditional charm even after being modernized.", imgUrl: "https://www.myholidays.com/blog/content/images/2020/10/Riyadh--The-Cultural-Hub-in-Saudi-Arabia.jpg"},
    //     {header:"Ithra’s Library", paragraph:"a dynamic place of learning and activity. Our library is designed to foster individual and collaborative learning while nurturing a love of reading, discovery and the pursuit of knowledge.", imgUrl: "https://www.myholidays.com/blog/content/images/2020/10/Riyadh--The-Cultural-Hub-in-Saudi-Arabia.jpg"},
    //     {header:"Umluj is Maldives of Saudi Arabia", paragraph:"Is a small town in the northwest of Saudi Arabia 150 km north of Yanbu and right next to the Red Sea", imgUrl: "https://insidesaudi.com/wp-content/uploads/2019/04/Umluj-Islamd.jpg"},
    // ]
   
     useEffect (async () => {
        const response = await axios.get("http://localhost:5000/")
        setCardsArr(response.data)
        console.log(response.data);
    }, [])

    const favPlace= async(index)=>{
        const response = await axios.post(`http://localhost:5000/${index}`)
    }

    return (
    <div>
            
            <div className="container">

                    {
                        cardsArr.map((elem,index)=>{
                            return (
                            <div key={index}>
                                <img src={elem.imgUrl} />
                                <span onClick={()=>{favPlace(index)}}>♥</span>
                                <hr />
                                <h3>{elem.header}</h3>
                                <p>{elem.paragraph}</p>
                            </div>)
                        })
                    }
            </div>

        </div>
    )
}
