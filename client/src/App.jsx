import { NavLink, Route, Routes } from "react-router-dom";
import Listado from "./vistas/Listado";
import Agregar from "./vistas/Agregar";
import Editar from "./vistas/Editar";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold" to="/">Autores Favoritos</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Lista</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Agregar">Agregar</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Listado />} />
          <Route path="/Agregar" element={<Agregar />} />
          <Route path="/Editar/:id" element={<Editar />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
