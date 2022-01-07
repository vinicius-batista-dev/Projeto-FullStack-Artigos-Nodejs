const sequelize = require('sequelize');

const conn = new sequelize('guiapress', 'root', 'senha123', {
    host: 'localhost',
    dialect: 'mysql',
    // wikepedia timezone
    timezone: "-03:00"
})

module.exports = conn;