const config = require('../database/config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: config.dialect,
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle,
    }
})

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users = require('./users')(sequelize, Sequelize)
db.orders = require('./orders')(sequelize, Sequelize)

db.orders.belongsTo(db.users, { foreignKey: 'userID' })
db.users.hasMany(db.orders)

module.exports = db;