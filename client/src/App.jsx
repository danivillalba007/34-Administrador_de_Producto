import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetalleProducto from "./components/DetalleProducto";
import ProductManager from "./components/ProductManager";

import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductManager />}></Route>
          <Route
            path="/producto/detalle/:id"
            element={<DetalleProducto />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
