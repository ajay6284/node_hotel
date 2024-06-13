const mongoose= require('mongoose');
//Person schem
const personSchema= new mongoose.Schema({

    name: {
          type: String,
          required:true

    },

    email: {
        type:String,
        
        unique:true

    },

       Salary: {
        type:Number,
        required: true
    },

    Work: {
        type:String,
        enum:["chef", "waiter","manager"],
        required:true

    }

});

const Person = mongoose.model('person',personSchema);
module.exports=Person;