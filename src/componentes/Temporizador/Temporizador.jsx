import { useState, useEffect, useRef } from "react"

const Temporizador = () => {
    const [segundos, setSegundos] = useState(0);
    const intervalRef = useRef(null);

    useEffect( () => {
        //Iniciamos el temporizador cuando el componente se monta
        intervalRef.current = setInterval( () => {
            setSegundos(segundos => segundos + 1);
        }, 1000 )

        //Detenemos el temporizador: 
        return () => clearInterval(intervalRef.current);
    }, [])

    const detenerTemporizador = () => {
        clearInterval(intervalRef.current); // Detenemos el temporizador. 
        intervalRef.current = null; //Limpiamos la referencia. 
    }

  return (
    <div>
        <h2>Temporizador: {segundos}  </h2>
        <button onClick={detenerTemporizador}> Detener </button>
    </div>
  )
}

export default Temporizador