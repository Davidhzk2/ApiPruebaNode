// importar los modulos a utilizar y modelos
const express = require("express");
const router = express.Router();

const Products = require("../models/products");
const User = require("../models/users");
const Auth = require("../middleware/auth");


// Registrar producto
router.post("/registerProduct",Auth, async (req,res) => {
    // buscar el id del usuaurio
    let user  = await User.findById(req.user._id);
    // validar usuario
    products = new Products({
        userId: user._id,
        name: req.body.name,
        description: req.body.description,
        imgUrl: req.body.imgUrl,
        category: req.body.category,
        valor: req.body.valor,
    });

    const result = await products.save();
    return res.status(200).send(result);
   
});

// consultar todos los productos 
router.get("/listProducts/", Auth, async (req,res)=>{
    // buscra usuario por id
    const user = await User.findById(req.user._id);
    // validar el id
    if(!user) return res.status(400).send("No se encontro el usuario en el bd");
    // si si existe traer de la base de datos
    const products = await Products.find({userId: req.user._id});
    return res.status(200).send({products});
});

// exportar controlador
module.exports = router;