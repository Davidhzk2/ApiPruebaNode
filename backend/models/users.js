// importar los modulos  para simular la coeccion 
const mongoose = require("mongoose");
const moment = require("moment");
const jwt = require("jsonwebtoken");

// crear esquema 
const userSchema = new mongoose.Schema({
    // propiedad y tipo de dato
    name: String,
    username: String,
    password: String,
    roleId: {type: mongoose.Schema.ObjectId, ref: "role"},
    phone: String,
    status:Boolean,
    date: {type: Date, default: Date.now}
});

// crear el jwt
userSchema.methods.generateJWT = function (){
    return jwt.sign(
    {
        _id: this._id,
        name: this.name,
        username: this.username,
        roleId: this.roleId,
        iat: moment().unix(),
    },process.env.SECRET_KEY_JWT
    );
};

// Coleccion de mongo 
// modelo para crear la coleccion, variebles, nombreModelo  y esquema
const User = mongoose.model("users", userSchema);

// exportar modulo de usuarios
module.exports = User;