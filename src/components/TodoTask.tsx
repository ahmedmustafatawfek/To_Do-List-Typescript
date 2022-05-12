import React from 'react'
import {ITask} from './interfaces'
import './style.css';


interface Props {
    task:ITask;
    completeTask(taskNameToDelete:string):void;
}


const TodoTask = ({task ,completeTask}:Props) => {
  return (
    <div className='task'>
        <div className='content'>
            <span>{task?.taskName}</span>
            <span> {task?.deadline}</span>
        </div>
        <button className='butn' onClick={() => {completeTask(task.taskName)}}>X</button>
    </div>
  )
}

export default TodoTask