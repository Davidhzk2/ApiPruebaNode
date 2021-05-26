// importar lo modulos que se van a usar
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../models/users");


// Logica del controlador login 
router.post("/login/", async (req, res) =>{
    // buscar si existe el username
    let user = await User.findOne({username: req.body.username});
    // validar nombre de usuario
    if(!user) return res.status(400).send("Usuario y/o contraseña incorrecto !");
    // comparar contraseña
    const hash = await bcrypt.compare(req.body.password , user.password);
    // validar contraseña
    if(!hash) return res.status(400).send("Usuario y/o contraseña incorrecto !");
    // devolver token de login
    const jwtToken = await user.generateJWT();
    return res.status(200).send({jwtToken});
});

// exportar modulo
module.exports = router;