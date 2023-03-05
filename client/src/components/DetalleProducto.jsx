import axios from "axios";
import { useEffect, useState } from "react";

const DetalleProducto = () => {
  const [DetalleProducto, setDetalleProducto] = useState({});

  useEffect(() => listarDetallesProducto(), []);

  const listarDetallesProducto = () => {
    axios
      .get("http://localhost:8000/api/producto/detalle/" + id)
      .then((res) => {
        setDetalleProducto(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2>Detalles del Producto</h2>
    </>
  );
};

export default DetalleProducto;
