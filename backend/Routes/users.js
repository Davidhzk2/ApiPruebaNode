// importar lo modulos que vamos a usar 
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const Role = require("../models/role");
const User = require("../models/users");

const Auth = require("../middleware/auth");
const UserAuth = require("../middleware/user");
const Admin = require("../middleware/admin");


// registrar usuario en la coleccion
router.post("/registerUser/", async (req, res) =>{
    // validar campos vacios
    if(!req.body.name || !req.body.username || !req.body.password)
    return res.status(400).send("Process Failed: Incomplete data");

    // validar si existe el nombre usuario
    let user = await User.findOne({username:req.body.username});
    if(user) return res.status(400).send("the usarname already exists");

    const hash = await bcrypt.hash(req.body.password, 10);

    const role = await Role.findOne({name : "USER"});
    if(!role) return res.status(400).send("Process Failed: No role assigned");

    // guardar datos del user
    user = new User({
        name: req.body.name,
        username: req.body.username,
        password: hash,
        roleId: role._id,
        phone: req.body.phone,
        status: true
    });
    
    try{
        // guardar usuario en la coleccion de mongo 
        const result = await user.save();
        if(result) return res.status(400).send("Error al registrar usuario");
        const jwtToken = user.generateJWT();
        res.status(200).send({jwtToken});
    }catch(error){
        return res.status(400).send("Failed to register user");
    }
});

router.put("/updateUser",Auth, UserAuth, async (req, res) =>{
    if(!req.body._id || !req.body.name || !req.body.username || !req.body.password || !req.body.roleId)
       return res.status(400).send("Process Failed: Incomplete data!");
    
    const hash = await bcrypt.hash(req.body.password, 10);

    const user = await User.findByIdAndUpdate(req.body._id, {
        name: req.body.name,
        username: req.body.username,
        password: hash,
        roleId: req.body.roleId,
        phone: req.body.phone, 
        status: true
    });

    if(!user) return res.status(400).send("Process Failed:Error editing User");
    return res.status(200).send({user});
});

// exportar el modulo 
module.exports = router;


