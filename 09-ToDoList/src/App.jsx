import List from "./List"
import TaskModal from "./TaskModal"

const taskList =[
  {
    id:1,
    task: 'Estudiar',
    location:'Casa',
    limit: '13:00',
    description:'Estudiar para el procimo examen',
    done:false
  },
  {
    id:2,
    task: 'Practicar',
    location:'Campo',
    limit: '15:00',
    description:'Entrenar para el siguiente partido',
    done:false
  },
  {
    id:3,
    task: 'Jugar',
    location:'Casa',
    limit: '19:00',
    description:'Dormir temprano',
    done:false
  }
]

function App() {
  return(
    <div className="container">
    <h1> To Do List</h1>
    <hr/>
    <List taskList={taskList}/>
    <hr />
    <div className="text-end">
      <TaskModal taskList={taskList}/>
      <button 
      className="btn btn-outline-primary"
      data-bs-target='#taskModal'
      data-bs-toggle='modal'
      >
        <i className="bi bi-plus-lg"></i>
        Add
      </button>
    </div>
    </div>
  )
  
}

export default App
