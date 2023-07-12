import './App.css';
import { useState } from 'react';
import { Task } from './Task';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [completeTask, setCompleteTask] = useState(false);

  const handleChange = (event)=>{
    setNewTask(event.target.value);
  };

  const addTask = ()=>{
    if(newTask){
      const tarefa = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id +1,
        nomeTarefa: newTask,
        completed: false
      };
      setTodoList([...todoList, tarefa]);
    }
  };

  const deleteTask = (id)=>{
    setTodoList(todoList.filter((task)=> task.id !== id));
  };

  const handleCompleteTask = (id) => {
    setTodoList(
      todoList.map((task) => {
          if(task.id === id){
            return { ...task, completed: true }
          } else {
            return task;
          }
        }
      )
    );
  };

  return (
    <div className="App">

      <div className='addTask'>
        <input onChange={handleChange} /> &nbsp;
        <button onClick={addTask}>Add Task</button>
      </div>
      
      <div className='list'>
        {todoList.map((tarefa)=>{
          return (
            <Task 
              nomeTarefa={tarefa.nomeTarefa} 
              id={tarefa.id} 
              completed={tarefa.completed}
              deleteTask={deleteTask} 
              handleCompleteTask={handleCompleteTask}
              key={tarefa.id} 
            />
          );
        })}
      </div>

    </div>
  );
}

export default App;
