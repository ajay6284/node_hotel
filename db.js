const mongoose= require('mongoose');

const mongosURL='mongodb://localhost:27017/restorent';

mongoose.connect(mongosURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

)

const db= mongoose.connection;

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