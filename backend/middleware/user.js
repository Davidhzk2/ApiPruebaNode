const mongoose = require("mongoose");


const auth = (req, res, next) =>{
    const user = await .User.findById(req.user._id);
    if(!user)  let resultado = res.status(400).send("No se encontro el usuario en la db");
    next();
0}