require('dotenv').config({ path: __dirname + '/../.env' });
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD, {
  host: process.env.PGHOST,
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 95,    //maximum connection which postgresql or mysql can intiate
    min: 0,     //maximum connection which postgresql or mysql can intiate
    acquire: 30000, // time require to reconnect
    idle: 20000, // get idle connection
    evict: 10000, // it actualy removes the idle connection
    // handleDisconnects: true
  }
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})()

const model = name => database.models[name];
const User = require(`../models/users_model.js`)(sequelize, Sequelize.DataTypes);
const Review = require('../models/reviews_model.js')(sequelize, Sequelize.DataTypes);

module.exports = (database) = {
  sequelize: sequelize,
  models: { User, Review },
  // connect,
  model,
};