const BaseService = require("../services/base-service");
const router = require("express").Router();
const Publisher = require("../models/Publisher");
const { default: mongoose } = require("mongoose");
const publisher = new BaseService(Publisher);

router.get("/", async (req, res) => {
  try {
    const limitValue = 2;
    const page = req.query.page;
    const allPublishers = await publisher.paginationload({}, limitValue, page);
    res.status(200).json(allPublishers);
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newPublisher = await publisher.create(req.body);
    res.status(200).json(newPublisher);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const updatedPublisher = await publisher.update(id, req.body);
    res.status(200).json(updatedPublisher);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
});
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    publisher.remove(id);
    res.status(200).json({ message: "Succesfully deleted" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
});
module.exports = router;
