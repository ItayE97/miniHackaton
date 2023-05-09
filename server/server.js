const express = require("express");
const app = express();
const PORT = 5001;

let Axios = require("axios");

const users = [{userName: 'A', id: '1', age: '10'}, {userName: 'B', id: '2', age: '20'}, {userName: 'C', id: '3', age: '30'}];

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT} on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Main page");
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

//get user with /id in url
app.get("/users/:id", (req, res) => {
  //find user by id and return it to client
  const userFound = users.find(user => user.id === req.params.id);
  if(userFound !== undefined) {
    res.json(userFound);
  } else {
    res.json({message: 'User not found'});
  }
});

//get user with id in url
app.get("/users", (req, res) => {
  const userFound = users.find(user => (user.id === req.query.id));
  if(userFound !== undefined) {
    res.json(userFound);
  } else {
    res.json({message: 'User not in DB'});
  }
});

app.get("/excuse",async(req, res) => {
  const theme = await fetchExcuse(req,res);
  res.json(theme);
});


app.post("/api", (req, res) => {
  res.json({ message: "Post request!" });
});

// function fetchExcuse(req,res) 
// {
//   console.log(req.query.theme);
//   return new Promise((resolve, reject) => {
//     Axios.get(`https://excuser-three.vercel.app/v1/excuse/${req.query.theme}/`).then(
//       (res) => {
//         console.log(res.data);
//         resolve(res.data);
//       }
//     );
//   });
// };

async function fetchExcuse(req,res) 
{
  console.log(req.query.theme);
  let theme = await Axios.get(`https://excuser-three.vercel.app/v1/excuse/${req.query.theme}/`);
  return theme.data;
};


// const apiRouter = require('./routes/api');
// app.use('/api', apiRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}
