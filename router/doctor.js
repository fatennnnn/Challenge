const express = require("express");
const router = express.Router();
const Contact = require("../Modal/contact");

router.get("/get_cont", (req, res) => {
  Contact.find()
    .then(contacts => res.send(contacts))
    .catch(err => console.log("err"));
});
router.post("/", (req, res) => {
  let { name, telphone, email } = req.body;
  const newcontact = new Contact({ name, telphone, email });

  newcontact
    .save()
    .then(data => res.send(data))
    .catch(err => console.log("cant added"));
});

//delete
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Contact.findOneAndDelete({ _id: id })
    .then(data => res.send(data))
    .catch(err => console.log(err));
});
// update
router.put("/:id", (req, res) => {
  const { name, telphone, email } = req.body;
  const { id } = req.params;
  Contact.findOneAndUpdate({ _id: id }, { $set: { name, telphone, email } })
    .then(data => res.send(data))
    .catch(err => console.log(err));
});
module.exports = router;
