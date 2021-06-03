// importar los modulos a utilizar y modelos
const express = require("express");
const router = express.Router();

const Products = require("../models/products");
const User = require("../models/users");
const Auth = require("../middleware/auth");
const UserAuth = require("../middleware/user");



// Registrar producto
router.post("/registerProduct",Auth, UserAuth, async (req,res) => {

    products = new Products({
        userId: req.user._id,
        name: req.body.name,
        description: req.body.description,
        imgUrl: req.body.imgUrl,
        category: req.body.category,
        valor: req.body.valor,
        status: true
    });

    const result = await products.save();
    return res.status(200).send(result);
   
});

// consultar todos los productos 
router.get("/listProducts/", Auth,UserAuth, async (req,res)=>{
    
    // si si existe traer de la base de datos
    const products = await Products.find({userId: req.user._id});
    return res.status(200).send({products});
});

// actualizar los productos
router.put("/updateProduct/", Auth, UserAuth, async (req, res) =>{
  

    // buscar y capturar los datos 
    const product = await Products.findByIdAndUpdate(req.body._id ,{
        userId: user._id,
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        valor: req.body.valor,
        status:true
    });
    // validar el producto
    if(!product) return res.status(400).send("No se pudo editar el producto");
    return res.status(200).send({product});
});


// Eliminar producto 
router.delete("/:_id", Auth,UserAuth, async (req, res) =>{

    // buscar y eliminar producto por id
    const product = await Products.findByIdAndDelete(req.params._id);
    // validar producto
    if(!product) return res.status().send("Error: no se pudo eliminr el producto");
    return res.status(200).send("El prodcuto se elimino con exito!");
});

// exportar controlador
module.exports = router;