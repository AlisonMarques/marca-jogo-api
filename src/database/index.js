import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';
import Appoitment from '../app/models/Appointment';

import databaseConfig from '../config/database';

const models = [User, File, Appoitment];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
