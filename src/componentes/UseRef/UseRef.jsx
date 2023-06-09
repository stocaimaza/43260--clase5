import { useRef } from "react"

//UseRef es un hook que me permite crear una referencia mutable que puede ser actualizada sin provocar una nueva renderización del componente. 

//"Referencia mutable" significa que puedo cambiar el valor. 


const UseRef = () => {

    const productosComprados = useRef(0);

    //Este Hook me retorna un objeto, con una propiedad que se llama "current" la cual podemos mutar. 

    const comprar  = () => {
        productosComprados.current = productosComprados.current + 1;
        console.log(productosComprados.current);
    }

  return (
    <div>
        <h2>Productos Marolio Comprados: {productosComprados.current}</h2>
        <button onClick={ comprar }> Comprar </button>
    </div>
  )
}

export default UseRef