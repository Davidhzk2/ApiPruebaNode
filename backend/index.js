// importar modulos
const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
require("dotenv").config();

const User = require("./Routes/users");
const Product = require("./Routes/products");
const Auth = require("./Routes/auth");

// variable para el proyecto 
const app = express();

app.use(express.json());
app.use(cors());

// modulos
app.use("/api/users/", User);
app.use("/api/products/", Product);
app.use("/api/auth/", Auth);


// escuchar puerto 
app.listen(process.env.PORT , () =>
    console.log("The server running on port:"+ process.env.PORT)
);


dbConnection();

