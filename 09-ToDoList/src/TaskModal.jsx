import { useForm } from "./Hooks/useForm"
const taskInfo = {
task:'',
description:'',
location:'',
limit:''
}


const TaskModal = ({taskList}) => {
    const [values, handleInputChange, reset]= useForm(taskInfo)
  return (
    <div className="modal fade" id="taskModal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 className="modal-title">
                        Add New Task
                    </h5>
                    <button type="button"
                    className="btn-close"
                    data-bs-dismiss="modal">
                    </button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col text-start">
                            <label 
                            htmlFor="task" 
                            className="form-label">
                            Task</label>
                            <input
                            id='task'
                            name='task'
                            type='text'
                            onChange={handleInputChange}
                            className="form-control"
                            value={values.task}
                            ></input>
                            {/*========================*/}
                            <label 
                            htmlFor="description" 
                            className="form-label">
                            Description</label>
                            <textarea 
                            id='description'
                            name='description'
                            className="form-control"
                            onChange={handleInputChange}
                            value={values.description}>
                            </textarea>
                            {/*========================*/}
                            <label 
                            htmlFor="location" 
                            className="form-label">
                            Location</label>
                            <input
                            id='location'
                            name='location'
                            type='text'
                            className="form-control"
                            onChange={handleInputChange}
                            value={values.location}
                            ></input>
                            {/*========================*/}
                            <label 
                            htmlFor="limit" 
                            className="form-label">
                            Limit</label>
                            <input
                            id='limit'
                            name='limit'
                            type='time'
                            className="form-control"
                            onChange={handleInputChange}
                            value={values.limit}
                            ></input>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                <button 
                className="btn btn-sm btn-outline-primary"
                onClick={()=> {console.log(values)}}
                >
                    <i className="bi bi-pencil-square"></i>
                    Save
                    </button>
                <button type="button"
                    className="btn btn-sm btn-outline-secondary"
                    data-bs-dismiss="modal"> 
                    <i className="bi bi-x-lg"></i>
                    Close
                    </button>
                </div>
            </div>
        </div>
        
    
    </div>
  )
}

export default TaskModal