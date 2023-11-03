export const Task = (props) => {
    return (
        <div className='task'>
            <h1 id="task-item" style={{textDecoration: props.completed ? "line-through" : "none"}}>
                {props.taskName}
            </h1>
            <button id="complete" onClick={() => props.completeTask(props.id)}> Complete </button>
            <button onClick={() => props.deleteTask(props.id)}> X </button>
        </div>
    )
}