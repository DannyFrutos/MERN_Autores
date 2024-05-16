import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Debe agregarle un nombre")
    .min(3, "Debe tener al menos 3 caracteres"),
});

const Agregar = () => {
  const navigate = useNavigate();
  const initialValues = {
    name: "",
  };

  const handleSubmit = (values) => {
    axios
      .post("http://localhost:8000/api/Autores/new", values)
      .then((res) => {
        navigate("/");
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: "El autor fue agregado",
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
      <div className="card" style={{ width: "30rem" }}>
        <div className="card-body">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <h1 className="mb-4 text-center">Agregar Autores</h1>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nombre:{" "}
                  </label>
                  <Field type="text" name="name" className="form-control" />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    Agregar Autor
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

export default Agregar;
