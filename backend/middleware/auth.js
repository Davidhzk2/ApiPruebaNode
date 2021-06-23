// Importar los modulos 
const jwt = require("jsonwebtoken");
// Logica
const auth = async (req, res, next) =>{
    // revisar header de autenticacion
    let jwtToken = req.header("Authorization");
    // validra si existe el token
    if(!jwtToken) return res.status(400).send("Autorizacion Rechazada: no hay token!");
    // si existe el token lo separmos del Beare
    jwtToken = jwtToken.split(" ")[1];
    // validar token 
    if(!jwtToken) return res.status(400).send("Autorizacion Rechazada: no hay token.");
    // validar nuestro token
    try {
        // revisar palabra secreta del payload
        const payload = jwt.verify(jwtToken, process.env.SECRET_KEY_JWT);
        req.user = payload;
        next();
    } catch (error) {
        return res.status(400).send("Autorizacion rechazada: el token no es valido");
    }
};


module.exports = auth;

