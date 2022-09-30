const mongoose=require('mongoose')
const express=require('express');
const route= require('./routes')
const dotenv=require('dotenv');
const bodyParser = require('body-parser');
const app=express();

dotenv.config({path: 'config.env'});

app.use(bodyParser.json());

mongoose.connect(process.env.DB_url,{useNewUrlParser: true})
.then(() => {
    console.log("MongoDb connected")
}).catch((err) => {
    console.log(err.message)
});

app.get('/',(req,res)=>{
    res.send("main page")
});

app.use('/' ,route)

app.listen( process.env.PORT ,function(){
    console.log('App running on port ' + process.env.PORT )
});