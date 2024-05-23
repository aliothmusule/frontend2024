import ListItem from "./ListItem"

const personas=[{
  nombre:'Pedro',
  apellido:'Martinez',
  email:'pedro@ejemplo.com',
  telefono:'2546871359',},

  {
  nombre:'Santiago',
  apellido:'Garcia',
  email:'santi@gmail.com',
  telefono:'7894561235',
  },

 {nombre:'Juan',
  apellido:'Lopez',
  email:'Juan@hotmail.com',
  telefono:'4481254512',
  }
]

function App() {

  return (
    <>
      <div>
       <h1>Agenda</h1>
       <hr />
       <ul>
        {personas.map((persona)=>(
          <ListItem
          key={persona.email}
          persona={persona}
          />
        ))}
        </ul>
      </div>
    </>
  )
}

export default App
