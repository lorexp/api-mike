const Sequelize = require('sequelize');
const config = require('../config.json');

const Locations = require('../models/Locations');

const models = [Locations];

class Database {
  constructor() {
    this.init();
  }

  init() {
    const sequelize = new Sequelize(config.sequelize);
    models
      .map((model) => model.init(sequelize))
      // .map((model) => model.sync({ force: true }))
      .map((model) => model.associate && model.associate(sequelize.models));
  }
}

module.exports = new Database();
