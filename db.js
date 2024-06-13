const mongoose= require('mongoose');
require('dotenv').config();

//const MONGODB_URL='mongodb://localhost:27017/restorent';

const MONGODB_URL=process.env.MONGO_URL;

mongoose.connect(MONGODB_URL);

const db = mongoose.connection;

db.on('connected', () =>{
    console.log("connected to mongoDB server");
})


db.on('error',(err) =>{
    console.log('disconnected',err);
})

db.on('disconnected',() =>{
    console.log("mongoDB server disconnected")
})

module.exports=db;