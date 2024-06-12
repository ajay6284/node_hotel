/*var add =(a,b) =>{return a+b;}

var result=add(128,7);

console.log(result);
*/

/*
function callback(){
    console.log("call back function is called");
}

var add =function(a,b ,callback){
    var result=a+b;
    console.log("resultn is "+ result);
    callback();
}

add(2,callback)
*/

/*var _ = require('lodash');

let ary=  [2,4,6];

console.log("is this is a arry :" +_.isArray(ary));
*/







const express = require('express');
const app = express();
const db=  require('./db');
const Person = require('./module/person');
const bodyParser = require('body-parser'); 
app.use(bodyParser.json());
const Menu=require('./module/menu');




/*app.get('/1', function (req, res) {
  res.send('server is live ')
})

app.get('/chicken', function (req, res) {
    res.send('chiceken is out of stock ')
  })

  app.get('/jasondata', function (req, res) {


    const product={
        name:"ayurveda",
        id:"202",
        price:"5000",
    };
    res.send(product)
  }) */
  const personroutes = require('./routes/personroutes');
  app.use('/person', personroutes);
  

app.listen(3000);

