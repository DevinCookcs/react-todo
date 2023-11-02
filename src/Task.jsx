export const Task = (props) => {
    return (
        <div className='task'>
            <h1 style={{textDecoration: props.completed ? "line-through" : "none"}}>
                {props.taskName}
            </h1>
            <button onClick={() => props.completeTask(props.id)}> Complete </button>
            <button onClick={() => props.deleteTask(props.id)}> X </button>
        </div>
    )
}