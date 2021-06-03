const Role = require("../models/role");

const admin = async (req, res, next)=>{
    const role = await Role.findById(req.user.roleId);

    if(!role) return res.status(400).send("Process Failed: Role does not exists");

    if(role.name === "ADMIN") next();
    else return res.status(400).send("Process Failed: Unauthorized user");
};

module.exports = admin;