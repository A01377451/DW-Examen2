const path = require("path");
const Verdura = require("../utils/database").models.Verdura;
const sequelize =require("../utils/database");
const Sequelize = require("sequelize");

exports.getVerVerdura = (req,res)=>{
    //SELECT * from Consola;
    Verdura.findAll()
        .then(verduras=>{
            console.log("Verduras",verduras);
            res.send(verduras);
        })
        .catch(e=>{
            console.log(e);
            res.send("Error");
        })
}

exports.postAgregarVerdura = (req,res)=>{
    console.log(req.body)
    //INSERT INTO Consola VALUES ()
    Verdura.create(req.body)
        .then(resultado=>{
            console.log("Registro exitoso");//Servidor
            res.send("Registro exitoso") //Cliente
        })
        .catch(error=>{
            console.log(error); //Servidor
            res.send("Ocurrio un error")//Cliente
        })    
}