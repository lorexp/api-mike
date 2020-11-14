const Sequelize = require("sequelize");
const moment = require("moment");

class Terminals extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        id_bus: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        id_route: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        latitude: {
          type: Sequelize.FLOAT(40, 6),
          allowNull: false,
        },
        longitude: {
          type: Sequelize.FLOAT(40, 6),
          allowNull: false,
        },
        created_at: {
          type: Sequelize.BIGINT,
          defaultValue: moment().unix(),
        },
      },
      {
        freezeTableName: true,
        timestamps: false,
        sequelize,
        modelName: "locations",
      }
    );

    return this;
  }
}

module.exports = Terminals;
