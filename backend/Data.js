const express = require("express");
const cors = require('cors')


const app = express();
const port = 5000;

app.use(express.json())
app.use(cors())

const users=[
  {id:1 , password:"2288", email:"test@gmail.com", name:"wala"},
  {id:2 , password:"9966", email:"test2@gmail.com", name:"hayah"},
];

const mustToVisit = [
  {header:"The Cultural Hub", paragraph:"A cultural delight for all the tourists and business travelers alike, Riyadh is a heart of Saudi Arabia which has retained its traditional charm even after being modernized.", imgUrl: "https://www.myholidays.com/blog/content/images/2020/10/Riyadh--The-Cultural-Hub-in-Saudi-Arabia.jpg"},
  {header:"Ithra’s Library", paragraph:"a dynamic place of learning and activity. Our library is designed to foster individual and collaborative learning while nurturing a love of reading, discovery and the pursuit of knowledge.", imgUrl: "https://www.myholidays.com/blog/content/images/2020/10/Riyadh--The-Cultural-Hub-in-Saudi-Arabia.jpg"},
  {header:"Umluj is Maldives of Saudi Arabia", paragraph:"Is a small town in the northwest of Saudi Arabia 150 km north of Yanbu and right next to the Red Sea", imgUrl: "https://insidesaudi.com/wp-content/uploads/2019/04/Umluj-Islamd.jpg"},
  {header:"The Cultural Hub", paragraph:"A cultural delight for all the tourists and business travelers alike, Riyadh is a heart of Saudi Arabia which has retained its traditional charm even after being modernized.", imgUrl: "https://www.myholidays.com/blog/content/images/2020/10/Riyadh--The-Cultural-Hub-in-Saudi-Arabia.jpg"},
  {header:"Ithra’s Library", paragraph:"a dynamic place of learning and activity. Our library is designed to foster individual and collaborative learning while nurturing a love of reading, discovery and the pursuit of knowledge.", imgUrl: "https://www.myholidays.com/blog/content/images/2020/10/Riyadh--The-Cultural-Hub-in-Saudi-Arabia.jpg"},
  {header:"Umluj is Maldives of Saudi Arabia", paragraph:"Is a small town in the northwest of Saudi Arabia 150 km north of Yanbu and right next to the Red Sea", imgUrl: "https://insidesaudi.com/wp-content/uploads/2019/04/Umluj-Islamd.jpg"},
];

const favPlaceArr = []

app.get("/",(req,res)=>{
    res.status(200)
    res.json(mustToVisit)
})


app.post("/new-user", (req,res)=>{
  const {password, email, name} = req.body
  // newId = users[users.length-1]
  const id = users[users.length-1].id +1
  users.push({id, password, email, name})

  res.status(200)
  res.json(users)
})


app.post("/add-fav:index", (req,res)=>{
  const index = req.params.index
  favPlaceArr.push(mustToVisit[index])


  // favPlaceArr.forEach((elem,index)=>{
  //   if(mustToVisit[index] == favPlaceArr[i]){
  //     return
  //   } 
  // })

  // favPlaceArr.push(mustToVisit[index])

  res.status(200)
  res.json(favPlaceArr)
})

app.delete("/unlike:header",(req,res)=>{
  const header = req.params.header
  for(let i=0 ; i<favPlaceArr.length ; i++){
    if(favPlaceArr[i].header == header){
      favPlaceArr.splice(i,1)
    }
  }

  res.status(200)
  res.json(favPlaceArr)
})















// app.post("/:index",(req,res)=>{
//   const index = req.params.index
//   for(let i=0;i<favPlaceArr.length;i++){
//     if(mustToVisit[index].header == favPlaceArr[i].header){
//       return;
//     }
//   }
//   favPlaceArr.push(index)
//   res.status(200)
//   res.json(favPlaceArr)
// })

// app.post("/fav:index",(req,res)=>{
//   const index = req.params.index

//   for(let i=0 ; i<mustToVisit.length ; i++){
//     if(favPlaceArr[index].header == mustToVisit[i].header){
//       favPlaceArr.splice(index,1)
//     }
//   }

//   res.status(200)
//   res.json(favPlaceArr)
// })

app.get("/favPlace",(req,res)=>{
  res.status(200)
  res.json(favPlaceArr)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});