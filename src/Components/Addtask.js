import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../JS/actions'



function Addtask() {
    const dispatch = useDispatch()
    const [description, setDescription] = useState('')
    return (
        <div>
            <input onChange={(e) => setDescription(e.target.value)} type="text" value={description}/>
            <button style={{ marginBottom: 25 }} onClick={() => dispatch(addTodo({id:Date.now(), description:description , isDone:false}))}>Add Task</button>
        </div>
    )
}

export default Addtask
