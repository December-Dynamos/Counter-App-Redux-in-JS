import store from './redux/store.js'
import { increase, decrease, reset } from './redux/actions/counterActions.js'

// getState() is a method that returns the current state value of the Redux store 
// dispatch() hepls you to call an action

console.log(store.getState())

store.dispatch(increase()) // happens 

// store.dispatch({type: "INCREASE"}) 
console.log(store.getState())

store.dispatch(increase()) 
// store.dispatch({type: "INCREASE"})
console.log(store.getState())


store.dispatch(increase(100)) // 
// store.dispatch({type: "INCREASE", value: 100}) 
console.log(store.getState())



