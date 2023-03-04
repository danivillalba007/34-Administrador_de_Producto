const mongoose = require("mongoose");

const ProductoSchema = new mongoose.Schema({
  titulo: String,
  precio: Number,
  descripcion: String,
});

const Producto = mongoose.model("Producto", ProductoSchema);

module.exports = Producto;
