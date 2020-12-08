import task from '../../data'


const add = (state = task, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.payload]

        case 'ISDONE':
            return state.map(el => el.id === action.payload ? { id:el.id , description:el.description , isDone: !el.isDone } : el)

        case 'EDIT':
            return state.map(el => el.id === action.payload.id ? {...el, description: action.payload.description } :el)

        default:
            return state
    }
}

export default add; 