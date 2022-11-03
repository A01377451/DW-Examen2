const Sequelize = require('sequelize');

const Verdura = (sequelize)=>{
    sequelize.define('Verdura',{
        id:{
            type:Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombre:{
            type:Sequelize.STRING,
        },
        color:{
            type:Sequelize.STRING,
        },
        sabor:{
            type:Sequelize.STRING,
        }
    })
}

module.exports = Verdura;
