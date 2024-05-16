import { useEffect, useState } from 'react';
import axios from 'axios';

const useAxios = (url) => {

    const [datos, setDatos] = useState([]);

    useEffect(() => {
        axios.get(`${url}`)
            .then((res) => {
                setDatos(res.data.autores);
            })
            .catch(error => {
                console.error('Error al obtener datos:', error);
            });
    }, []);
    return { datos };
};

export default useAxios;
