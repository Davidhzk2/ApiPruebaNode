// importar modelos para coleccion
const mongoose  = require("mongoose");
const moment = require("moment");


const productsSchema = new mongoose.Schema({
    // Propiedad  / valor
    userId: String,
    name: String,
    description: String,
    imgUrl: String,
    category: String,
    valor: Number,
    status: Boolean
});

// crear modelo de prodcutos
const products = mongoose.model("products", productsSchema);

// exportar el modelo
module.exports = products;


