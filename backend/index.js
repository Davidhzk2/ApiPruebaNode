// importar modulos
const express = require("express");
const mongoose = require("mongoose");


// variable para el proyecto 
const app = express();
// que vamos a usar en el proyecto 
app.use(express.json());

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
});
