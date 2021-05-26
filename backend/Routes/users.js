// importar lo modulos que vamos a usar 
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../models/users");


// registrar usuario en la coleccion
router.post("/registerUser/", async (req, res) =>{

    // validar si existe el nombre usuario
    let user = await User.findOne({username:req.body.username});

    if(user) return res.status(400).send("El nombre de usuario ya Existe");

    const hash = await bcrypt.hash(req.body.password, 10);

    // guardar datos del user
    user = new User({
        name: req.body.name,
        username: req.body.username,
        password: hash,
        phone: req.body.phone
    })
    
    // guardar usuario en la coleccion de mongo 
    const result = await user.save();
    
    if(result){
        const jwtToken = user.generateJWT();
        res.status(200).send({jwtToken});
    }else{
        return res.status(400).send("Error al registrar usuario");
    }
});


// exportar el modulo 
module.exports = router;


