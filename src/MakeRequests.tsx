import { useEffect } from 'react';
import Axios from 'axios';


const axiosInstance = Axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
})


export const MakeRequests = () => {

  useEffect(() => {
    console.log('Fazendo request');

    const abortRequest = new AbortController();

    axiosInstance.get('/users', { signal: abortRequest.signal })
      .then(res => res.data)
      .then(console.log)
      .catch(console.log)

    return () => {
      console.log('Request cancelada');
      abortRequest.abort('Componente destruído!');
    }
  }, [])


  return (
    <>
      Mostrando componente
    </>
  );
};
