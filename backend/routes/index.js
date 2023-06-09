const router = require("express").Router();
const booksRoutes = require("./books.routes");
const readerRoutes = require("./readers.routes");
const publisherRoutes = require("./publisher.routes");
const comment_rateRoutes = require("./comment_rate.routes");
router.use("/books", booksRoutes);
router.use("/readers", readerRoutes);
router.use("/publishers", publisherRoutes);
router.use("/comment_rates", comment_rateRoutes);
module.exports = router;
