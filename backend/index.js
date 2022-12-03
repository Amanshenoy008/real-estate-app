const express = require('express')
const app = express()
var demo = require('./routes/demo1.js')
var url = "mongodb://localhost:27017/"
var obj = require('./data/datas')
var cors = require('cors')
var MongoClient = require('mongodb').MongoClient
app.use(cors())

let queryresult

MongoClient.connect(url, function(err, db) {
  if (err) throw err
  var dbo = db.db("real-estate")
  var name= 'Home'
  dbo.createCollection(name, function (err, res) {
    if (err) {
        
        if (err.codeName =="NamespaceExists") {
            console.log("Already Exists Collection  : " + name + "")
            return
        }
    }
    console.log("Collection created! : "+name+"")

    dbo.collection('Home').insertMany( obj , (err, res)=>{
      if (err) throw err
      console.log('Documents inserted')
      
    })

})

dbo.collection('Home').findOne({'resident-id':'102'}, function(err, result) {
  if (err) throw err
  console.log(result)
  queryresult=result
  
})





})

app.get('/',(req,res)=>{
  res.json(obj)
})



app.listen(2000)