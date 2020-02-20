const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  telphone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});
//Contact NOM A IMPORETER DANS LA ROUTE
module.exports = Contact = mongoose.model("contact", ItemSchema);
