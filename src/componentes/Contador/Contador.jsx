import { useState, useEffect } from "react"

//El efecto primario de React es renderizar componentes, manipulando el DOM. Peeeero, una aplicación Web tiene que hacer mucho más que solo mostrarse, tiene que realizar operaciones, consumir datos de algún servidor, usar eventos. 

//Utilizamos un nuevo Hook llamado useEffect. 
//Con este Hook le digo a React "hace más cosas además de solo renderizar el componente"
//Me permite controlar todos los efectos secundarios provocados por el cambio de estado. 

//Ejemplo A: cambio el título de la pestaña del navegador. 

//Ejemplo B: cambio el color del botón "agregar al carrito" cuando el contador sea mayor a 5. 



const Contador = ({stock, inicial}) => {
    const [contador, setContador] = useState(inicial);
    const [color, setColor] = useState("black");

    useEffect( () => {
        document.title = `Contador: ${contador}`;
        //Ejemplo B: 
        /*
        if(contador >= 5) {
            document.getElementById("boton").style.color = "red";
        }
        */
        //Esto no es lo más recomendado, porque estoy accediendo directamente al DOM. Y no se considera una buena práctica. 
        //Mejor es usar el estado para cambiar el color del botón. 
        if(contador > 5) {
            setColor("red");
        } else {
            setColor("black");
        }
    },[contador])

    const aumentarContador = () => {
        if(contador < stock) {
            setContador(contador + 1);
        }
    }

    const disminuirContador = () => {
        if(contador > inicial) {
            setContador(contador - 1);
        }
    }

    const agregarAlCarrito = () => {
        console.log(`Agregado ${contador} items `);
    }


  return (
    <div>
        <h2>Mi querido Contador</h2>

        <button onClick={disminuirContador}> - </button>
        <strong> {contador} </strong>
        <button onClick={aumentarContador}> + </button>

        <button onClick={agregarAlCarrito} style={{color: color }}> Agregar al Carrito </button>
    </div>
  )
}

export default Contador