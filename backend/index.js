const express = require('express')
const app = express()
const mongoose = require('mongoose');
const mongoDB = require("./db")
mongoDB();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", `${process.env.base_URL}`)
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use(express.json())
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));

app.get('/', (req, res) => {
  res.send('Foodiezy')
})
app.get('/getdata', (req, res) => {
  res.send(JSON.stringify(mongoose.connection.db.collection("food_items")))
})

// app.get('/getData', myAsyncFunction)

// async function index(req, res) {
//   let r = await db.collection("food_items").toArray();
//   return res.send(r);
// }

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})