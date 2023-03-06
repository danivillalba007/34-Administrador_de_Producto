import { Link } from "react-router-dom";
import "../styles/TodosLosProductos.css";

const TodosLosProductos = ({ listaProductos }) => {
  return (
    <>
      <h2>Todos los Productos</h2>

      <div>
        {listaProductos.map((producto, index) => {
          return (
            <p key={index}>
              {producto.titulo}
              <button className="boton"> Borrar</button>
              <button className="boton"> Editar</button>

              <br />
              <Link
                className="link"
                to={"/producto/detalle/" + producto._id}
                key={index}
              >
                ver detalle
              </Link>
            </p>
          );
        })}
      </div>
    </>
  );
};

export default TodosLosProductos;
