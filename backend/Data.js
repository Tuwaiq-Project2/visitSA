const express = require("express");
const cors = require("cors");
const e = require("express");

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

const users = [
  {
    id: 1,
    password: "2288",
    email: "test@gmail.com",
    name: "wala",
    favPlaceArr: [],
  },
  {
    id: 2,
    password: "9966",
    email: "test2@gmail.com",
    name: "hayah",
    favPlaceArr: [],
  },
  {
    id: 3,
    password: "7755",
    email: "test3@gmail.com",
    name: "lojain",
    favPlaceArr: [],
  },
];

let currentUser = "";

const mustToVisit = [
  {
    id: 1,
    header: "MECCA city",
    paragraph:
      "Visiting Mecca to perform the Hajj is obligatory for all able Muslims. The Great Mosque of Mecca, known as the Grand Mosque, is the home of the Kaaba that Muslims believe Abraham and Ismail built. It is one of the holiest places in Islam and is the direction of prayer for all Muslims",
    imgUrl:
      "https://www.urbookings.com/wp-content/uploads/2020/01/swissotel-al-maqam.jpg",
    comments: [],
  },
  {
    id: 2,
    header: "Ithra’s Library",
    paragraph:
      "a dynamic place of learning and activity. Our library is designed to foster individual and collaborative learning while nurturing a love of reading, discovery and the pursuit of knowledge.",
    imgUrl:
      "https://vid.alarabiya.net/images/2018/08/25/9cb5bc89-1a16-44df-859b-00d9d4422a25/9cb5bc89-1a16-44df-859b-00d9d4422a25_16x9_1200x676.jpg?width=1138",
    comments: [],
  },
  {
    id: 3,
    header: "Umluj is Maldives of Saudi Arabia",
    paragraph:
      "Is a small town in the northwest of Saudi Arabia 150 km north of Yanbu and right next to the Red Sea",
    imgUrl:
      "https://insidesaudi.com/wp-content/uploads/2019/04/Umluj-Islamd.jpg",
    comments: [],
  },
  {
    id: 4,
    header: "NEOM CITY",
    paragraph:
      "NEOM’s reason for being is change, as we have a unique opportunity to do things differently – at scale. We can elevate the way we live, work and play precisely because we have a blank canvas to work with. We are ‘Made to Change’.",
    imgUrl:
      "https://www.neom-property.com/wp-content/uploads/2020/10/Neom-Headquarters.jpg",
    comments: [],
  },
  {
    id: 5,
    header: "Riyadh season",
    paragraph:
      "Saudi Arabia's Riyadh season , witch kicked in the kingdom's capital , offers 64 to 70 hours of entertainment in a day in the form of events. Riyadh season zones including Boulevard Riyadh City , Winter Wonderland , Zaman Village , and alot of other activitis.",
    imgUrl:
      "https://www.timeoutriyadh.com/cloud/timeoutriyadh/2021/09/27/Winter-Wonderland-1.jpg",
    comments: [],
  },
  {
    id: 6,
    header: "Farasan island",
    paragraph:
      "About 40 kilometers (or a one-hour boat ride) from Jazan, you’ll find the Farasan Islands.  The island is known for its incredible biodiversity — the Saudi Wildlife Authority declared the Farasan Islands a protected area in 1996 — and boasts pristine coral reefs for epic scuba diving, a variety of fish and world-class birding for species including the white-eyed gull.",
    imgUrl:
      "https://cnn-arabic-images.cnn.io/cloudinary/image/upload/w_1920,h_1080,c_fill,q_auto/cnnarabic/2020/08/17/images/162713.jpg",
    comments: [],
  },{
    id: 7,
    header: "Alnamas",
    paragraph:
      "Al-Namas is a famous hill station located on Sarawat Mountains. is a window to Arab culture and traditions which date back to pre-Islamic period.  Recently, the city has developed a beautiful walking track for local population and tourists. The track offers great natural view and lots of things to do.",
    imgUrl:
      "https://directionsksa.com/sites/default/files/styles/media_image/public/2020-07/alnmas_001.jpg?h=6dde8900&itok=UO8WN-_G",
    comments: [],
  },{
    id: 8,
    header: "Haqel island",
    paragraph:
      "Haqlis a city in the northwest of Saudi Arabia near the head of the Gulf of Aqaba. This beach and shipwreck is located 55km south from Haql city in Saudi Arabia’s Tabuk Province. What a stunning backdrop and contrast the majestic mountains provide in the background of this beach scene.",
    imgUrl:
      "https://cdn.expatwoman.com/s3fs-public/editorial/saudi_shipwreck4_-_crazeofrealclicks_wordpress_com.jpg",
    comments: [],
  },{
    id: 9,
    header: "Dughaither Village",
    paragraph:
      "Located south of Al-Khobar, Dughaither Island covers an area of about 2,000 square metres. The island is distinguished by its unique view of the Red Sea and the lovely fountain that's surrounded by stunning greenery. It also features a wide selection of high-end international restaurants and cafes in addition to the access it provides to various fun water activities.",
    imgUrl:
      "https://www.travellwd.com/wp-content/uploads/2019/07/%D9%85%D9%86%D8%AA%D8%AC%D8%B9-%D8%A7%D9%84%D8%BA%D8%B1%D9%88%D8%A8.jpg",
    comments: [],
  },
];

// const favPlaceArr = []

// const commentsCard1 = [{ name: "www", comment: "333333" }];

app.get("/", (req, res) => {
  res.status(200);
  res.json(mustToVisit);
});

app.get("/ccard/:id", (req, res) => {
  const id = req.params.id;
  let currentCard = {};
  for (let i = 0; i < mustToVisit.length; i++) {
    if (mustToVisit[i].id == id) {
      currentCard = mustToVisit[i];
    }
  }

  res.status(200);
  res.json(currentCard);
});

app.get("/users", (req, res) => {
  res.status(200);
  res.json(users);
});

app.get("/list-fav-places:userId", (req, res) => {
  const userId = req.params.userId;

  let arr = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == userId) {
      arr.push(users[i].favPlaceArr);
    }
  }
  res.status(200);
  res.json(arr);
});

app.post("/new-user", (req, res) => {
  const { password, email, name } = req.body;
  // newId = users[users.length-1]
  const id = users[users.length - 1].id + 1;
  users.push({ id, password, email, name });

  res.status(200);
  res.json("Sucssesfully");
});

app.post("/log-in-user", (req, res) => {
  const { email, password } = req.body;

  for (let i = 0; i < users.length; i++) {
    if (email == users[i].email && password == users[i].password) {
      // favPlaceArr=users[i].favPlaceArr
      currentUser = {
        id: users[i].id,
        email,
        favPlaceArr: users[i].favPlaceArr,
      };
    }
  }

  res.status(200);
  res.json(currentUser);
});

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

app.post("/new-comment-cards:id", (req, res) => {
  const id = req.params.id;
  const { name, comment } = req.body;
  let currentComments = [];
  // const copied = [...commentsCard1]
  for (let i = 0; i < mustToVisit.length; i++) {
    if (mustToVisit[i].id == id) {
      mustToVisit[i].comments.push({ name, comment });
      currentComments = [...mustToVisit[i].comments];
    }
  }

  res.status(200);
  res.json(currentComments);
});

app.get("/comments-card", (req, res) => {
  res.status(200);
  res.json(commentsCard1);
});

app.delete("/unlike/:userId", (req, res) => {
  const userId = req.params.userId;
  const { header } = req.body;

  // let arr = [];
  // let fav = [];

  for (let i = 0; i < users.length; i++) {
    if (users[i].id == userId) {
      // arr.push(users[i].favPlaceArr);
      users[i].favPlaceArr = users[i].favPlaceArr.filter((ele) => {
        return ele.header !== header;
      });
      res.status(200);
      res.json(users[i].favPlaceArr);

      // users[i] = fav
    }
  }

  // fav = arr.filter((elem) => {
  //   return elem.header == header;
  // });

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i].header == fav.header) {
  //     arr[i].splice(i, 1);
  //   }
  // }

  // // for(let i=0 ; i<users.length ; i++){
  // //   if(users[i].id == userId){
  // //     users[i].favPlaceArr = fav
  // //   }
  // // }

  // res.status(200);
  // res.json(arr);
});

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

app.post("/favPlace", (req, res) => {
  const { index, userId } = req.body;

  // let userPlaces= []
  for (let i = 0; i < users.length; i++) {
    if (userId == users[i].id) {
      users[i].favPlaceArr.push(mustToVisit[index]);
    }
  }

  res.status(200);
  res.json(
    users.find((ele) => {
      return ele.id === userId;
    }).favPlaceArr
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
