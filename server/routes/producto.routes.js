const ProductoController = require("../controllers/producto.controllers");

module.exports = (app) => {
  app.post("/api/producto/new", ProductoController.crearNuevoProducto);
  app.get("/api/productos", ProductoController.obtenerProductos);
};
