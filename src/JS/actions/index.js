export const addTodo = (payload) => ({
        type: 'ADD_TASK',
        payload
})

export const isDone = (payload) => ({
        type: 'ISDONE',
        payload
})

export const editDescription = (payload) => ({
        type: 'EDIT',
        payload 
})