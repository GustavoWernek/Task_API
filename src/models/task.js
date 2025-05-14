const {DataTypes} = require("sequelize")
const sequelize = require("../config/database")

const Task = sequelize.define("Task", {
    nome: {
        type: DataTypes.STRING, 
        allowNull:false,
    },
    descrição:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    dataCriacao: {
        type: DataTypes.DATE,
        allowNull:false,
        defaultValue: DataTypes.NOW
    }
});

module.exports = Task;