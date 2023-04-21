const router = require("express").Router();
const ReadersService = require("../services/readers-service");
const { default: mongoose } = require("mongoose");

router.get("/", async (req, res) => {
  try {
    limit = 2;
    page = req.query.page;
    const readers = await ReadersService.paginationload({}, limit, page);
    res.status(200).json(readers);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const readerProfile = await ReadersService.paginationLoadById(
      { _id: id },
      "books_id"
    );
    res.status(200).json(readerProfile);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
});
router.post("/", async (req, res) => {
  try {
    const newReader = await ReadersService.create(req.body);
    res.status(200).json(newReader);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
});
router.put("/readBook/:id/:readerId", async (req, res) => {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const readerId = new mongoose.Types.ObjectId(req.params.readerId);
    const updatedreader = await ReadersService.update(readerId, {
      $push: { books_id: id },
    });
    res.status(200).json(updatedreader);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const updatedReader = await ReadersService.update(id, req.body);
    res.status(200).json(updatedReader);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    await ReadersService.remove(id);
    res.status(200).json({ message: "Successfully Deleted !" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
});

module.exports = router;
