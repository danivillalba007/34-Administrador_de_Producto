const ProductoController = require("../controllers/producto.controllers");

module.exports = (app) => {
  app.post("/api/producto/new", ProductoController.crearNuevoProducto);
  app.get("/api/productos", ProductoController.obtenerProductos);
  // app.get("/api/producto/detalle/:_id", ControladorProducto.obtenerProducto);
};
