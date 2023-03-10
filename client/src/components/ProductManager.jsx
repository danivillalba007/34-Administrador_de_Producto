import axios from "axios";
import "../styles/ProductManager.css";
import { useState, useEffect } from "react";

const ProductManager = () => {
  const [formState, setFormState] = useState({
    titulo: "",
    precio: "",
    descripcion: "",
  });

  const { titulo, precio, descripcion } = formState;
  const [listaProductos, setlistaProductos] = useState([]);

  useEffect(() => listarProductos(), []);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const crearProducto = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/producto/new", formState, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setFormState({
          titulo: "",
          precio: "",
          descripcion: "",
        });
      })

      .catch((err) => {
        // setErrores(err.response.data.errors);
        console.log(err);
      });
  };

  const listarProductos = () => {
    axios
      .get("http://localhost:8000/api/producto", { withCredentials: true })
      .then((res) => {
        setlistaProductos(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1> Product Manager </h1>
      <form className="ProductManager" onSubmit={crearProducto}>
        <p>
          <label> Titulo </label>
          <input
            type="text"
            name="titulo"
            onChange={onInputChange}
            value={titulo}
          />
        </p>
        <p>
          <label> Precio </label>
          <input
            type="number"
            name="precio"
            onChange={onInputChange}
            value={precio}
          />
        </p>
        <p>
          <label> Descripción </label>
          <input
            type="text"
            name="descripcion"
            onChange={onInputChange}
            value={descripcion}
          />
        </p>
        <button> Crear </button>
      </form>
      {/* <div>{{ listarProductos }}</div> */}
    </div>
  );
};
export default ProductManager;
