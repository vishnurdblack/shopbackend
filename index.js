const port=process.env.PORT || 3001;
const cors=require("cors");
const express=require('express');
const conne= require('./data/connection');
const routesP= require('./data/RoutesP'); 
const bodyParser = require('body-parser')
conne(); 
const app=express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use('/p',routesP);
app.listen(port,()=>{
    console.log("Serve list");
}); 