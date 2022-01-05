const sequelize = require('sequelize');

const conn = new sequelize('guiapress', 'root', 'senha123',{
    host: 'localhost',
    dialet: 'mysql'
})

module.exports = conn