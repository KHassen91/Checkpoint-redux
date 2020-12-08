import React from 'react';
import { useDispatch } from 'react-redux';
import { isDone } from '../JS/actions';
import {editDescription} from '../JS/actions';


function Task(props) {
    const dispatch = useDispatch();

    const edit=(id)=>{
        let desModified=prompt('modify description')
        dispatch(
            editDescription({id:id,description:desModified})
        )
    }

    return (
        <div style={{ marginTop: 50 }}>
            <h3>{props.index + 1}</h3>
            <h1 className={props.Tasks.isDone && 'doudou' }>{props.Tasks.description}</h1>
            <button className={props.Tasks.isDone && 'button'} style={{ marginRight: 15 }} onClick={() => dispatch(isDone(props.Tasks.id))}>Done</button>
            <button onClick={() => edit(props.Tasks.id)}>Edit</button>
        </div>
    )
}

export default Task
