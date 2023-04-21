class BaseService {
  constructor(model) {
    this.model = model;
  }
  async create(object) {
    return await this.model.create(object);
  }
  findId(id) {
    return this.model.findById(id);
  }
  async findOneFunction(prop) {
    return await this.model.findOne(prop);
  }
  async update(id, updatednfo) {
    return await this.model.findByIdAndUpdate(id, updatednfo, {
      returnOriginal: false,
    });
  }
  async updateProp(prop, updatedInfo) {
    return await this.model.updateOne(prop, updatedInfo);
  }
  async remove(id) {
    return await this.model.findByIdAndRemove(id);
  }
  paginationload(prop, limitValue, page) {
    return this.model
      .find(prop)
      .skip((page - 1) * limitValue)
      .limit(limitValue);
  }
  paginationLoadById(prop, populateValue) {
    return this.model.find(prop).populate(populateValue);
  }
}
module.exports = BaseService;
