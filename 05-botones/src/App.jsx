//State monitorear una variable que va a cambiar para que antualice los componentes que lo utilizan
//Hook 

import { useState } from "react"

function App() {
  
  //regresa un vector donde el primero es el nombre de la constante
  //la segunda es la funcion con el nombre de la constante anteponiendole Set
  const [count, setCount] = useState(0)
  {/** const handleButtonIncrementar = () => {
    //count = count+1
    //como queremos que el valor de count cambie se utiliza su funcion osea setcount
    setCount(count+1)
  }

  const handleButtonDecrementar = () => {
    //count = count+1
    //como queremos que el valor de count cambie se utiliza su funcion osea setcount
    setCount(count-1)
  } */}
  return (
    <>
      <div>
        <h1>Contador</h1>
        <hr/>
        <h2>{count}</h2>
        {/** Cuando la funcion es muy grande puede realizarse una funcion aparte
        <button onClick={handleButtonIncrementar}>Incrementar</button>
        <button onClick={handleButtonDecrementar}>Decrementar</button>*/}
        
        {/**En este caso la accion es pequeña por eso puede ir directamente en el evento*/}
        <button onClick={()=>setCount(count+1)}>Incrementar</button>
        <button onClick={()=>setCount(count-1)}>Decrementar</button>
        <button onClick={()=>setCount(count-count)}>Reset</button>
      </div>
    </>
  )
}

export default App
