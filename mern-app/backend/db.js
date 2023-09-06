const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Foodiezy:foodiezymernapp@cluster0.j1w2d4e.mongodb.net/foodiezymern?retryWrites=true&w=majority';

const mongoDB = async () => {
  mongoose.set("strictQuery", false);
  await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
    if (err) console.log("---", err)
    else {
      console.log("Connected Successfully")
      const fetched_data = await mongoose.connection.db.collection("food_items")
      fetched_data.find({}).toArray(function (err, data) {
        if (err) console.log(err);
        else console.log();
      })
    }
  });
}

module.exports = mongoDB;