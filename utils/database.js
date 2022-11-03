//Configuración de sequelize
const Sequelize = require('sequelize');

//Objeto de conexión
const sequelize = new Sequelize('examen_JLO','admin','12345678',{
    dialect:'mysql',
    port:3304,
    host:'database-1.c7ogjn2ekv70.us-east-1.rds.amazonaws.com',
    dialectOptions:{
        options:{
            //Características especiales de la conexión
        }
    },
    define:{
        timestamps: false,
        freezeTableName:true
    }
});

//Cargar los modelos
const modelDefiners =[
    require('../models/verdura'),
];

//Adherir los modelos al objeto de conexion
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize);   
}

//Exportar el objeto sequelize
module.exports = sequelize;
