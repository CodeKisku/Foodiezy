const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Foodiezy:foodiezymernapp@cluster0.j1w2d4e.mongodb.net/?retryWrites=true&w=majority';

const mongoDB = async () => {
  mongoose.set("strictQuery", false);
  await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {
    if (err) console.log("---", err)
    else {
      console.log("Connected Successfully")
    }
  });
}

module.exports = mongoDB;