// importar los modulos a utilizar y modelos
const express = require("express");
const router = express.Router();

const Products = require("../models/products");


// Registrar producto
router.post("/registerProduct", async (req,res) => {

    products = new Products({
        name: req.body.name,
        description: req.body.description,
        imgUrl: req.body.imgUrl,
        category: req.body.category,
        valor: req.body.valor,
    });

    const reuslt =await products.save();

    if(reuslt){
        const jwtToken = products.generateJWT();
        return res.status(200).send( jwtToken);
    }else{
        return res.status(400).send(console.log("No se pudo registrar"));
    }
});

// exportar controlador
module.exports = router;