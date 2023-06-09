import { useState, useEffect } from "react"

const Categorias = () => {
    const [categoria, setCategoria] = useState("");

    useEffect( () => {
        document.title = `Categoría: ${categoria}`;
    }, [categoria])

    const manejadorClick = (categoria) => {
        setCategoria(categoria);
    }


  return (
    <div>
        <h2>Categoría de Productos: </h2>
        <button onClick={()=> manejadorClick("Frutas")}> Frutas </button>
        <button onClick={()=> manejadorClick("Carnes")} > Carnes </button>
        <button onClick={()=> manejadorClick("Lácteos")}> Lácteos </button>
        <button onClick={()=> manejadorClick("Limpieza")}> Limpieza </button>

    </div>
  )
}

export default Categorias