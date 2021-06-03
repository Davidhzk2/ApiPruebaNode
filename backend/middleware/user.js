const User = require("../models/users");

const user = async (req, res, next) =>{
    const user = await User.findById(req.user._id);
    if(!user) 
      res.status(400).send("No se encontro el usuario en la db");
    next();
}

module.exports = user;