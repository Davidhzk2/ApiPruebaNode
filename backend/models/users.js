// importar los modulos  para simular la coeccion 
const mongoose = require("mongoose");
const moment = require("moment");
const jwt = require("jsonwebtoken");

// crear esquema 
const userSchema = new mongoose.Schema({
    // propiedad y tipo 
    name: String,
    username: String,
    password: String,
    phone: String,
    date: {type: Date, default: Date.now}
});

// crear el jwt
userSchema.methods.generateJWT = function (){
    return jwt.sign(
    {
        _id: this._id,
        name: this.name,
        username: this.username,
        iat: moment().unix(),
    },
    "skjwt"
    );
};

// Coleccion de mongo 
// modelo para crear la coleccion, variebles, nombreModelo  y esquema
const User = mongoose.model("users", userSchema);

// exportar modulo de usuarios
module.exports = User;