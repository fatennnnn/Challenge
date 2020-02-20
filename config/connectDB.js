const mongoose = require("mongoose");
//CONFURATION ENTRE
const config = require("config");
const connectDB = () => {
  // MONGOURL qui est definit a partir de default.json
  mongoose
    .connect(config.get("MONGOURL"), {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log("server connected"))
    .catch(err => console.log("errer db "));
};
module.exports = connectDB;
