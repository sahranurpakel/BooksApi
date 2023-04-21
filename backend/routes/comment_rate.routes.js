const { default: mongoose } = require("mongoose");
const Comment_rateService = require("../services/comment_rate-services");
const readersService = require("../services/readers-service");
const router = require("express").Router();

router.get("/:bookid", async (req, res) => {
  // ! Kitap sayfasına gidince o kitaba ait yorumları çekeceğim
  try {
    const page = req.query.page;
    const limit = 2;
    const id = new mongoose.Types.ObjectId(req.params.bookid);
    const deneme = await Comment_rateService.paginationload(
      { book_id: id },
      limit,
      page
    );
    res.status(200).json(deneme);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
});
router.get("/userComments/:userid", async (req, res) => {
  //! reader profilinden yazdığı yorumlara erişebilir. pagination yapman lazım
  try {
    const page = req.query.page;
    const limit = 2;
    const id = new mongoose.Types.ObjectId(req.params.userid);
    const readerComments = await Comment_rateService.paginationload(
      { user_id: id },
      limit,
      page
    );
    res.status(200).json(readerComments);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
});
router.post("/:id/:book_id", async (req, res) => {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const book_id = new mongoose.Types.ObjectId(req.params.book_id);
    const user = await readersService.findId(id).select("name , surname");
    const info = {
      user_id: id,
      book_id: book_id,
      name: user.name[0] + "*** " + user.surname[0] + "***",
      comments: [{ comment: req.body.comment }],
      rate: req.body.rate,
    };
    const newCommentRate = await Comment_rateService.create(info);
    res.status(200).json(newCommentRate);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
});
router.put("/:id/:book_id", async (req, res) => {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const book_id = new mongoose.Types.ObjectId(req.params.book_id);
    const info = {
      ...req.body,
      $push: { comments: { comment: req.body.comment } },
    };
    const prop = {
      user_id: id,
      book_id: book_id,
    };
    const uptadedComment = await Comment_rateService.updateProp(prop, info);
    res.status(200).json(uptadedComment);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const updatedComment = await Comment_rateService.update(id, req.body);
    res.status(200).json(updatedComment);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    await Comment_rateService.remove(id);
    res.status(200).json({ message: "Deleted Successfully !!!" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong" });
  }
});
module.exports = router;
