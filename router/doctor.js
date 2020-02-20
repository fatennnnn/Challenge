const express = require("express");
const router = express.Router();
const Doctor = require("../Modal/doctor");

router.get("/", (req, res) => {
  Doctor.find()
    .then(doctors => res.send(doctors))
    .catch(err => console.log("err"));
});
router.post("/", (req, res) => {
  let { name, telephone, email, adresse, image } = req.body;
  const newdoctor = new Doctor({
    name,
    telephone,
    email,
    adresse,
    specialite: "generaliste",
    image
  });

  newdoctor
    .save()
    .then(data => res.send(data))
    .catch(err => console.log("cant added"));
});

//delete
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Doctor.findOneAndDelete({ _id: id })
    .then(data => res.send(data))
    .catch(err => console.log(err));
});
// update
router.put("/:id", (req, res) => {
  const { name, telephone, email, adresse, specialite, image } = req.body;
  const { id } = req.params;
  Doctor.findOneAndUpdate(
    { _id: id },
    { $set: { name, telephone, email, adresse, specialite, image } }
  )
    .then(data => res.send(data))
    .catch(err => console.log(err));
});
router.put("/consultation/:id", (req, res) => {
  const { consultation } = req.body;
  const { id } = req.params;
  Doctor.findOneAndUpdate(
    { _id: id },
    { $set: { consultation } }
  )
    .then(data => res.send(data))
    .catch(err => console.log(err));
});
module.exports = router;
