import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

function TaskList() {

    let tasks = useSelector((state) => state)
    return (
        <div>
            {tasks.map((el,index) => <Task Tasks={el} index={index} />)}
        </div>
    )
}

export default TaskList
