import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductManager from "./components/ProductManager";
// import DetalleProducto from "./components/DetalleProducto";

import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductManager />}></Route>
          {/* <Route
            path="/producto/detalle/:id"
            element={<DetalleProducto />}
          ></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
