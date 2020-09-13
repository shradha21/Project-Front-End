import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'

import { startGetUser } from './actions/userAction'
import { startGetCustomers } from './actions/customersAction'
import { startGetDepartments } from './actions/departmentsAction'
import  { startGetEmployees } from './actions/employeesAction'
import { startGetTickets } from './actions/ticketsAction'

import configureStore from './store/configureStore'


const store = configureStore()
console.log('initial store', store.getState())

store.subscribe(() => {
    console.log('updated store value', store.getState())
})

//handle page reload
if(localStorage.getItem('authToken')) {
    store.dispatch(startGetUser())
    store.dispatch(startGetCustomers())
    store.dispatch(startGetDepartments())
    store.dispatch(startGetEmployees())
    store.dispatch(startGetTickets())
}

const jsx = (
    <Provider store = {store}>
        <App />
    </Provider>
)


ReactDOM.render(jsx,document.getElementById("root"))