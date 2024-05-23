import { useForm } from "./Hooks/useForm"

const inputsData = {
  username:'',
  password:'',
}

function App() {
  const [values, handleInputChange,inputsReset] = useForm(inputsData)
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    inputsReset()
  }

  return (
    <>
      <div className='text-center'>
        <h1>Inputs</h1>
        <hr/>
        <form onSubmit={(e)=>handleSubmit(e)} className='w-50 mx-auto'>
          <div>
            <label htmlFor='username'>Username</label>
            <input onChange={(event)=>handleInputChange(event)} 
            id="username" 
            name='username' 
            type="text" 
            value={values.username} />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>Password</label>
            <input onChange={(event)=>handleInputChange(event)} 
            id="password" 
            name='password' 
            type="password" 
            value={values.password}/>
          </div>
          <button type='submit'>Submit</button>
        </form>

        <hr />
        <div><h6>Inicio de sesion con las siguientes credenciales:</h6>
        <p>Username:{values.username}</p>
        <p>Password:{values.password}</p>
        </div>
      </div>
    </>
  )
}

export default App
