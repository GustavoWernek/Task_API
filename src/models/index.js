const sequelize = require('../config/database');
const Task = require ('./task');

sequelize.sync(); //cria tabela se não existirem 

module.exports = {
    sequelize,
    Task
};
