/*

CLASE 5: COMPONENTES 2

Recordemos... ¿Que es un componente? 
Conjunto de elementos que cumple una misma función en la interfaz del usuario. 
(ejemplo: un botón, un formulario, card de un producto, un título). 

CICLO DE VIDA DE LOS COMPONENTES:  es una serie de estados por cuales pasa todo componente a lo largo de su existencia. 

- Montaje. (Ingresa el componente al DOM).
- Actualización. (Ej. Actualizo el valor del contador)
- Desmontaje. (Cuando desaparece el contador porque me fui al carrito. )


*/

import Contador from "./componentes/Contador/Contador"
import Categorias from "./componentes/Categorias/Categorias"
import UseRef from "./componentes/UseRef/UseRef"
import Temporizador from "./componentes/Temporizador/Temporizador"

const App = () => {
  return (
    <div>
      <h1>hola Comisión</h1>
      <Contador stock={10} inicial={1}/>
      <Categorias/>
      <UseRef/>
      <Temporizador/>
      
    </div>
  )
}

export default App