import Sequelize from 'sequelize';
import config from '../config';

const sequelize = new Sequelize(
  config.sqldb.database,
  config.sqldb.user,
  config.sqldb.password,
  {
    ...config.sqldb,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

sequelize.options.logging = false;

sequelize.Sequelize = Sequelize;

export default sequelize;
