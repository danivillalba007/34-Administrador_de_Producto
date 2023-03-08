const ProductoController = require("../controllers/producto.controllers");

module.exports = (app) => {
  app.post("/api/producto/new", ProductoController.crearNuevoProducto);

  app.get("/api/productos", ProductoController.obtenerProductos);

  app.get("/api/producto/detalle/:_id", ProductoController.obtenerProducto);

  app.put("/api/producto/update/:_id", ProductoController.actualizarProducto);

  app.delete("/api/producto/delete/:_id", ProductoController.eliminarProducto);

  app.put("/api/producto/update/:_id", ProductoController.actualizarProducto);
};
