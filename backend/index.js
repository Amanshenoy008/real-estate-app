const express = require('express')
const app = express()
var demo = require('./routes/demo1.js')
var url = "mongodb://localhost:27017/"
var obj = require('./data/datas')
var cors = require('cors')

var MongoClient = require('mongodb').MongoClient

app.use(cors())

MongoClient.connect(url, function(err, db) {
  if (err) throw err
  var dbo = db.db("real-estate")

  var collectionExists = dbo.ListCollectionNames().ToList().Contains("Home");
if (collectionExists == false) {
    // code to create the collection here...
    dbo.createCollection("Home", function(err, res) {
      if (err) throw err
      console.log("Collection created!")
      
    })
  
  
    dbo.collection('Home').insertMany( obj , (err, res)=>{
      if (err) throw err
      console.log('Documents inserted')
      
    })

    


}
else {
    Console.log("Collection Already Exists!!")
}

})

app.get('/',(req,res)=>{

  res.json(obj)
})
app.listen(2000)