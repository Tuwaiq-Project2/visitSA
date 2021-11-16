const express = require("express");
const cors = require('cors')

const app = express();
const port = 5000;

app.use(express.json())
app.use(cors())

const users=[
  {id:1 , password:"2288", email:"test@gmail.com", name:"wala", favPlaceArr:[]},
  {id:2 , password:"9966", email:"test2@gmail.com", name:"hayah", favPlaceArr:[]},
  {id:3 , password:"7755", email:"test3@gmail.com", name:"lojain", favPlaceArr:[]},
];

let currentUser=""

const mustToVisit = [
  {header:"The Cultural Hub", paragraph:"A cultural delight for all the tourists and business travelers alike, Riyadh is a heart of Saudi Arabia which has retained its traditional charm even after being modernized.", imgUrl: "https://www.myholidays.com/blog/content/images/2020/10/Riyadh--The-Cultural-Hub-in-Saudi-Arabia.jpg"},
  {header:"Ithra’s Library", paragraph:"a dynamic place of learning and activity. Our library is designed to foster individual and collaborative learning while nurturing a love of reading, discovery and the pursuit of knowledge.", imgUrl: "https://www.myholidays.com/blog/content/images/2020/10/Riyadh--The-Cultural-Hub-in-Saudi-Arabia.jpg"},
  {header:"Umluj is Maldives of Saudi Arabia", paragraph:"Is a small town in the northwest of Saudi Arabia 150 km north of Yanbu and right next to the Red Sea", imgUrl: "https://insidesaudi.com/wp-content/uploads/2019/04/Umluj-Islamd.jpg"},
  {header:"The Cultural Hub", paragraph:"A cultural delight for all the tourists and business travelers alike, Riyadh is a heart of Saudi Arabia which has retained its traditional charm even after being modernized.", imgUrl: "https://www.myholidays.com/blog/content/images/2020/10/Riyadh--The-Cultural-Hub-in-Saudi-Arabia.jpg"},
  {header:"Ithra’s Library", paragraph:"a dynamic place of learning and activity. Our library is designed to foster individual and collaborative learning while nurturing a love of reading, discovery and the pursuit of knowledge.", imgUrl: "https://www.myholidays.com/blog/content/images/2020/10/Riyadh--The-Cultural-Hub-in-Saudi-Arabia.jpg"},
  {header:"Umluj is Maldives of Saudi Arabia", paragraph:"Is a small town in the northwest of Saudi Arabia 150 km north of Yanbu and right next to the Red Sea", imgUrl: "https://insidesaudi.com/wp-content/uploads/2019/04/Umluj-Islamd.jpg"},
];

// const favPlaceArr = []

const commentsCard1=[
  {name: "www", comment:"333333"}
]

app.get("/",(req,res)=>{
    res.status(200)
    res.json(mustToVisit)
})

app.get("/users",(req,res)=>{
  res.status(200)
  res.json(users)
})

app.post("/new-user", (req,res)=>{
  const {password, email, name} = req.body
  // newId = users[users.length-1]
  const id = users[users.length-1].id +1
  users.push({id, password, email, name})

  res.status(200)
  res.json(users)
})

app.post("/log-in-user", (req,res)=>{
  const {email, password} = req.body

  for(let i=0 ; i<users.length ; i++){
    if( email == users[i].email && password == users[i].password){
      // favPlaceArr=users[i].favPlaceArr
      currentUser = {id: users[i].id,email, favPlaceArr:users[i].favPlaceArr}
    }
  }

  res.status(200)
  res.json(currentUser)
})


// app.post("/add-fav:index", (req,res)=>{
//   const index = req.params.index
//   const userId = req.body

//   for(let i=0 ; i<users.length ; i++){
//     if(users[i].id == userId){
//       users[i].favPlaceArr.push(mustToVisit[index])
//     }
//   }

  // const places = [...currentUser.favPlaceArr]
  // places.push(mustToVisit[index])
  // currentUser.favPlaceArr = places

  // favPlaceArr.forEach((elem,index)=>{
  //   if(mustToVisit[index] == favPlaceArr[i]){
  //     return
  //   } 
  // })

  // favPlaceArr.push(mustToVisit[index])

//   res.status(200)
//   res.json(currentUser)
// })

app.post("/new-comment-card1", (req,res)=>{
  const {name, comment} = req.body
  // const copied = [...commentsCard1]
  commentsCard1.push({name,comment})
  res.status(200)
  res.json(commentsCard1)
})

app.get("/comments-card",(req,res)=>{
  res.status(200)
  res.json(commentsCard1)
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



app.post("/favPlace",(req,res)=>{
  const {index, userId} = req.body
  

  // let userPlaces= []
  for(let i=0 ; i<users.length ; i++){
    if(userId == users[i].id){
      users[i].favPlaceArr.push(mustToVisit[index])
    }
  }

  res.status(200)
  res.json(currentUser.favPlaceArr)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});