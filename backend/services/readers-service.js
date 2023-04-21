const Reader = require("../models/Readers");
const BaseService = require("./base-service");

class ReadersService extends BaseService {}

module.exports = new ReadersService(Reader);
