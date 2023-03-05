const TodosLosProductos = ({ listaProductos }) => {
  console.log(listaProductos);
  return (
    <>
      <h2>Todos los Productos</h2>

      <div>
        {listaProductos.map((producto, index) => {
          return <p key={index}>{producto.titulo}</p>;
        })}
      </div>
    </>
  );
};

export default TodosLosProductos;
