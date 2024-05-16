import axios from 'axios'
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';

const Eliminado = () => {
  const navegation = useNavigate()

  
  const eliminar = (id) => {
    console.log(id)
    Swal.fire({
      title: "Deseas eliminar el autor",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Cancelar",
      denyButtonText: `Eliminar`,
      reverseButtons: true
    }).then((result) => {
      if (result.isDenied) {
        axios.delete(`http://localhost:8000/api/Autores/delete/${id}`)
          .then((res) => {
            Swal.fire("El autor fue eliminado" + ` ${res}`);

          })
          .catch(err => {
            Swal.fire("El autor no pudo ser eliminado" + ` ${err}`);
          })
          navegation('/')
          window.location.reload()
      }
    });
  }

  return eliminar

}

export default Eliminado
