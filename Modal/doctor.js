const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  telephone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  adresse: {
    type: String,
    required: true
  },
  specialite: {
    type: String,
    required: true
  },
  consultation: {
    type: Array,
    default: []
  }
});
//Contact NOM A IMPORETER DANS LA ROUTE
module.exports = Doctor = mongoose.model("doctor", ItemSchema);


// {
//         nameclient: {
//           type: String,
//           required: true
//         },
//         telephoneclient: {
//           type: String,
//           required: true
//         },
//         emailclient: {
//           type: String
//         },
//         adresseclient: {
//           type: String
//         },
//         date: { default: Date.now() }
//       }


// {
//         "nameclient": "",
//         "telephoneclient": "",
//         "emailclient": "",
//         "adresseclient": "",
//         "date": 33
//       }