import { useState } from 'react';
import { MakeRequests } from './MakeRequests';


export default function App() {
  const [show, setShow] = useState(true);



  return <>
    <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>


    {show && <MakeRequests />}
  </>;
}
