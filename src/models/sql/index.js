import sqlClient from '../../config/sql/sqlClient';

const models = [require('./user'), require('./post'), require('./comment')];

const db = {};

models.forEach((model) => {
  const mod = model.default(sqlClient, sqlClient.Sequelize.DataTypes);
  db[mod.name] = mod;
});

db.sqlClient = sqlClient;

export default db;
