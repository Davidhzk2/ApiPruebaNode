// importar los modulos a utilizar y modelos
const express = require("express");
const router = express.Router();

const Products = require("../models/products");
const User = require("../models/users");
const Auth = require("../middleware/auth");
const UserAuth = require("../middleware/user");



// Registrar producto
router.post("/registerProduct",Auth, UserAuth, async (req,res) => {
    if(!req.body.name || !req.body.description || !req.body.category || !req.body.valor)
      return res.status(400).send("Process Failed: Incomplete data");

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

router.get("/allProducts",Auth, async(req, res) =>{
    const products = await Products.find({status: true});
    console.log(products.length);
    if(products.length == 0) return res.send("There are not products to list");
    return res.status(200).send({ products});
});

// actualizar los productos
router.put("/updateProduct/", Auth, UserAuth, async (req, res) =>{
    if(!req.body._id ||!req.body.name || !req.body.description || !req.body.category || !req.body.valor)
      return res.status(400).send("Process Failed: Incomplete data");
    const product = await Products.findByIdAndUpdate(req.body._id ,{
        userId: req.user._id,
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
router.put("/deleteProduct/", Auth, UserAuth, async (req, res) =>{
    if(!req.body._id ||!req.body.name || !req.body.description || !req.body.category || !req.body.valor)
      return res.status(400).send("Process Failed: Incomplete data");
    const product = await Products.findByIdAndUpdate(req.body._id ,{
        userId: req.user._id,
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        valor: req.body.valor,
        status:false
    });
    // validar el producto
    if(!product) return res.status(400).send("No se pudo editar el producto");
    return res.status(200).send({product});
});
router.delete("/:_id", Auth,UserAuth, async (req, res) =>{
    // buscar y eliminar producto por id
    const product = await Products.findByIdAndDelete(req.params._id);
    // validar producto
    if(!product) return res.status().send("Error: no se pudo eliminr el producto");
    return res.status(200).send("El prodcuto se elimino con exito!");
});

// exportar controlador
module.exports = router;