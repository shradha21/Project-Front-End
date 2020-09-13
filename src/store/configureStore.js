import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import userReducer from '../reducers/userReducer'
import customerReducer from '../reducers/customerReducer'
import departmentReducer from '../reducers/departmentReducer'
import employeesReducer from '../reducers/employeesReducer'
import ticketReducer from '../reducers/ticketReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
           user: userReducer,
           customers: customerReducer,
           departments: departmentReducer,
           employees: employeesReducer,
           tickets: ticketReducer

    }),applyMiddleware(thunk))
    return store
}

export default configureStore