const Producto = require("../models/producto.models");

module.exports.crearNuevoProducto = (req, res) => {
  Producto.create(req.body)
    .then((nuevoProducto) => res.json({ user: nuevoProducto }))
    .catch((err) => res.json({ message: "Algo salió mal", error: err }));
};

module.exports.obtenerProductos = (req, res) => {
  Producto.find()
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((error) => res.json(error));
};
