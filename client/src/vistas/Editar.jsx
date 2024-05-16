import React from "react";
import useAxios from "../hooks/useAxios.js";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Swal from "sweetalert2";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Debe agregarle un nombre")
    .min(3, "Debe tener al menos 3 caracteres"),
});

const Detalles = () => {
  const { id } = useParams();
  const { datos } = useAxios(`http://localhost:8000/api/Autores/${id}`);
  const navigate = useNavigate();

  const initialValues = {
    name: "",
  };

  const handleSubmit = (values) => {
    axios
      .put(`http://localhost:8000/api/Autores/update/${id}`, values)
      .then((res) => {
        navigate("/");
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: `El autor fue agregado`,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: `${err}`,
        });
      });
  };

  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card" style={{ width: '30rem' }}>
        <div className="card-body">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <h1 className="mb-4 text-center">Editar autor</h1>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nombre:{" "}
                  </label>
                  <Field
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder={datos.name}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="text-center">
                  <NavLink to="/" className="btn btn-secondary me-2">
                    Cancelar
                  </NavLink>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    Editar autor
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Detalles;
