import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductManager.css";

const EditarProducto = () => {
  const { id } = useParams();

  const [formState, setFormState] = useState({
    titulo: "",
    precio: "",
    descripcion: "",
  });

  const { titulo, precio, descripcion } = formState;

  useEffect(() => listarProductoPorID(), []);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const editarProducto = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:8000/api/producto/update/" + id, formState)
      .then((res) => {
        console.log(res);
        // navigate("/");
      })
      .catch((err) => {
        // setErrores(err.response.data.errors);
      });
  };

  const listarProductoPorID = () => {
    axios
      .get("http://localhost:8000/api/producto/detalle/" + id)
      .then((res) => {
        setFormState(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>EditarProducto</h2>

      <form className="ProductManager" onSubmit={editarProducto}>
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
            className="inputDescripcion"
            type="text"
            name="descripcion"
            onChange={onInputChange}
            value={descripcion}
          />
        </p>
        <button> Guardar </button>
      </form>
    </div>
  );
};

export default EditarProducto;
