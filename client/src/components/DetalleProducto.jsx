import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetalleProducto = () => {
  const [detalleProducto, setDetalleProducto] = useState([]);
  const { id } = useParams();
  const { titulo, descripcion, precio } = detalleProducto;

  useEffect(() => listarDetallesProducto(), []);

  const listarDetallesProducto = () => {
    axios
      .get("http://localhost:8000/api/producto/detalle/" + id)
      .then((res) => {
        setDetalleProducto(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2>Detalles del Producto</h2>
      <p> {titulo} </p>
      <p> Precio: {precio} </p>
      <p> Descripción: {descripcion} </p>
    </>
  );
};

export default DetalleProducto;
