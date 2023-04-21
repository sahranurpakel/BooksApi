const { default: mongoose } = require("mongoose");
const BookService = require("../services/books-service");
const ReadersService = require("../services/readers-service");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const limitValue = 2;
    const pageValue = req.query.page;
    const books = await BookService.paginationload({}, limitValue, pageValue);
    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const page = req.query.page;
    const limit = 2;
    const bookDetailReaders = await ReadersService.paginationload(
      { books_id: { $all: id } },
      limit,
      page
    );
    const detail = await BookService.findId(id);
    res.status(200).json({ bookDetailReaders, detail });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
});

router.post("/:publisherId", async (req, res) => {
  try {
    let info = {
      ...req.body,
      publisher_id: new mongoose.Types.ObjectId(req.params.publisherId),
    };
    console.log(BookService);
    const newbook = await BookService.create(info);
    res.status(200).json(newbook);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const updatedBook = await BookService.update(id, req.body);
    res.status(200).json(updatedBook);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    await BookService.remove(id);
    res.status(200).json({ message: "Successfully Deleted !" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
});

module.exports = router;
