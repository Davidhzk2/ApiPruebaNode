// importar modulos
const express = require("express");
const mongoose = require("mongoose");

const User = require("./Routes/users");
const Product = require("./Routes/products");

// variable para el proyecto 
const app = express();
// que vamos a usar en el proyecto 
app.use(express.json());

// modulos
app.use("/api/users/", User);
app.use("/api/products/", Product);

// crear varible del puerto 
const port  = process.env.PORT || 3001;

// escuchar puerto 
app.listen(port, () =>
    console.log("El servdidor esta corriendo en el puerto:"+ port)
);

// conexion a la base de datos y servidor local
mongoose.connect('mongodb://127.0.0.1:27017/apiprueba', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => console.log("Conexion de Mongo: ON"))
.catch((error) => console.log("Error al conectra a Mongo", error))
