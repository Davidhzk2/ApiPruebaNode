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
    if(!user) return res.status(400).send("No se encontro el usuario en el bd");

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

// actualizar los productos
router.put("/updateProduct/", Auth, async (req, res) =>{
    // buscar el usuario por id
    const user = await User.findById(req.user._id);
    if(!user) return res.status(400).send("no se encontro usuario en la bd");

    // buscar y capturar los datos 
    const product = await Products.findByIdAndUpdate(req.body._id ,{
        userId: user._id,
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        valor: req.body.valor
    });
    // validar el producto
    if(!product) return res.status(400).send("No se pudo editar el producto");
    return res.status(200).send({product});
});


// Eliminar producto 
router.delete("/:_id", Auth, async (req, res) =>{
    //consultar usuario por id 
    const user = await User.findById(req.user._id);
    // validar usuario 
    if(!user) return res.status(400).send("no se encontro usuario en la bd");
    // buscar y eliminar producto por id
    const product = await Products.findByIdAndDelete(req.params._id);
    // validar producto
    if(!product) return res.status().send("Error: no se pudo eliminr el producto");
    return res.status(200).send("El prodcuto se elimino con exito!");
});

// exportar controlador
module.exports = router;