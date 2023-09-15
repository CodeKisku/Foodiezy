const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Foodiezy:foodiezymernapp@cluster0.j1w2d4e.mongodb.net/foodiezymern?retryWrites=true&w=majority';

const mongoDB = async () => {
  mongoose.set("strictQuery", false);
  await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
    if (err) console.log("---", err)
    else {
      console.log("Connected Successfully")
      const fetched_data = await mongoose.connection.db.collection("food_items")
      fetched_data.find({}).toArray(async function (err, data) {
        const foodCategory = await mongoose.connection.db.collection("foodCategory")
        foodCategory.find({}).toArray(function (err, catData) {
          if (err) console.log(err);
          else {
            global.food_items = data;
            global.foodCategory = catData;
          }
        })
        // if (err) console.log(err);
        // else {
        //   global.food_items = data;
        // }
      })
    }
  });
}

module.exports = mongoDB;