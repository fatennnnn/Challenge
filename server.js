const express = require("express");
const app = express();

const connectDB = require("./config/connectDB");

app.use(express.json());
connectDB();
const doctors = require("./router/doctor");

app.use("/doctors", doctors);
const port = process.env.PORT || 5000;
app.listen(port, err =>
  err ? console.log("erreur") : console.log(`connected ${port}`)
);
