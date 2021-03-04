const { Sequelize } = require('sequelize');

module.exports = new Sequelize('smartliving','root','P@ssw0rd',{
    host: '101.132.235.182',
    port: '3306',
    dialect: 'mysql',
    logging: false
})