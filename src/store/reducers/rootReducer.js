import employeeReducer from './employeeReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    employee: employeeReducer,
    firestore: firestoreReducer
})

export default rootReducer