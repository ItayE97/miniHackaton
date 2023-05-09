const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger);

app.listen(PORT, () => {    
    console.log(`Server listening to port ${PORT} on http://localhost:${PORT}`);
});

app.get("/",(req,res)=>{
    res.send("Main page");
});

app.get("/api",(req,res)=>{
    res.send("Welcome to the API page");
});

// const apiRouter = require('./routes/api');
// app.use('/api', apiRouter);



function logger(req,res,next){
    console.log(req.originalUrl);
    next();
}