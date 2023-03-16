import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProductManager.css";
import TodosLosProductos from "./TodosLosProductos";

const ProductManager = () => {
  const navigate = useNavigate();
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
        // console.log(res);
        listarProductos();
        setFormState({
          titulo: "",
          precio: "",
          descripcion: "",
        });
        navigate("/producto");
      })

      .catch((err) => {
        // setErrores(err.response.data.errors);
        console.log(err);
      });
  };

  const listarProductos = () => {
    axios
      .get("http://localhost:8000/api/productos", {
        withCredentials: true,
      })
      .then((res) => {
        setlistaProductos(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err, "Error de referencia"));
  };
  function handleLogout() {
    axios
      .get("http://localhost:8000/api/logout", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err, "Error de referencia"));
  }

  return (
    <div>
      <h1>
        Control de stock <button onClick={handleLogout}>Logout</button>
      </h1>
      <form className="ProductManager" onSubmit={crearProducto}>
        <p>
          <label> Titulo : </label>
          <input
            type="text"
            name="titulo"
            onChange={onInputChange}
            value={titulo}
          />
        </p>
        <p>
          <label> Precio : </label>
          <input
            type="number"
            name="precio"
            onChange={onInputChange}
            value={precio}
          />
        </p>
        <p>
          <label> Descripción : </label>
          <input
            type="text"
            name="descripcion"
            onChange={onInputChange}
            value={descripcion}
          />
        </p>
        <button> Crear </button>
      </form>
      <TodosLosProductos listaProductos={listaProductos}></TodosLosProductos>
    </div>
  );
};
export default ProductManager;
