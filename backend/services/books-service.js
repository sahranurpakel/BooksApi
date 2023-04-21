const BaseService = require("./base-service");
const Book = require("../models/Books");

class BookService extends BaseService {}
module.exports = new BookService(Book);
