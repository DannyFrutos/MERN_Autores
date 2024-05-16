import Eliminador from "../componentes/Eliminado.jsx";
import useAxios from "../hooks/useAxios.js";
import { NavLink } from "react-router-dom";

const Listado = () => {
  const { datos } = useAxios("http://localhost:8000/api/Autores/");
  const eliminar = Eliminador();

  // Ordenar los datos alfabéticamente por el nombre
  const datosOrdenados = datos.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Listado de Autores</h1>
      <table className="table table-hover">
        <thead className="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          {datosOrdenados.map((data, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{data.name}</td>
              <td>
                <NavLink
                  to={`../Editar/${data._id}`}
                  className="btn btn-success btn-sm me-2"
                >
                  Editar
                </NavLink>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => eliminar(data._id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))} 
        </tbody>
      </table>
    </div>
  );
};

export default Listado;
