import { createStore } from 'redux'
import add from '../reducers'



const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const Store = createStore(add, reduxDevTools)
export default Store