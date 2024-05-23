import ListItem from "./ListItem"

const List = ({taskList}) => {
  return (
    <>
    
    <div className="row">

    <div className="col-6">
    <h4>Task</h4>
    </div>

    <div className="col-2">
    <h4>Limit</h4>
    </div>

    <div className="col">
    <h4>Locations</h4>
    </div>

    </div>
    {
        taskList.map((task)=>
            <ListItem 
            key={task.id}
            task={task}
            />
        )
    }
    </>
    
  )
}

export default List