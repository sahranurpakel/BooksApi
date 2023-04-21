const Comment_RateModel = require("../models/Comment_Rate");
const BaseService = require("./base-service");
class Comment_Rate extends BaseService {}
module.exports = new Comment_Rate(Comment_RateModel);
