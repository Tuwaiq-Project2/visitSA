const express = require("express");
const cors = require('cors')


const app = express();
const port = 5000;

app.use(express.json())
app.use(cors())

const mustToVisit = [
    {header:"The Cultural Hub", paragraph:"A cultural delight for all the tourists and business travelers alike, Riyadh is a heart of Saudi Arabia which has retained its traditional charm even after being modernized.", imgUrl: "https://www.myholidays.com/blog/content/images/2020/10/Riyadh--The-Cultural-Hub-in-Saudi-Arabia.jpg"},
    {header:"Ithra’s Library", paragraph:"a dynamic place of learning and activity. Our library is designed to foster individual and collaborative learning while nurturing a love of reading, discovery and the pursuit of knowledge.", imgUrl: "https://www.myholidays.com/blog/content/images/2020/10/Riyadh--The-Cultural-Hub-in-Saudi-Arabia.jpg"},
    {header:"Umluj is Maldives of Saudi Arabia", paragraph:"Is a small town in the northwest of Saudi Arabia 150 km north of Yanbu and right next to the Red Sea", imgUrl: "https://insidesaudi.com/wp-content/uploads/2019/04/Umluj-Islamd.jpg"},
];

const favPlaceArr = []

app.get("/",(req,res)=>{
    res.status(200)
    res.json(mustToVisit)
})

app.post("/:index",(req,res)=>{
  const index = req.params.index
  favPlaceArr.push(mustToVisit[index])
  res.status(200)
  res.json(favPlaceArr)
})

app.get("/favPlace",(req,res)=>{
  res.status(200)
  res.json(favPlaceArr)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});