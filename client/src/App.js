import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductManager from "./components/ProductManager";

import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductManager />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
