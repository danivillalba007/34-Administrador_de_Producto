import { Link, useNavigate } from "react-router-dom";

const TodosLosProductos = ({ listaProductos }) => {
  return (
    <>
      <h2>Todos los Productos</h2>

      <div>
        {listaProductos.map((producto, index) => {
          return (
            <p key={index}>
              {producto.titulo}
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
