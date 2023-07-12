export const Task = (props) => {

    return(

        <div className='tarefa-container' style={{
            textDecoration: props.completed ? 'line-through' : 'none'
        }}>
            <p>
                {props.nomeTarefa}
                <span 
                    className='click-deletar' 
                    onClick={() => props.deleteTask(props.id)}
                >x</span>
                <span 
                    className='click-complete' 
                    onClick={() => props.handleCompleteTask(props.id)}
                >complete</span>
            </p>
        </div>

    );

}