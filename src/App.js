import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './components/static/Home'
import Dashboard from './components/static/Dashboard'

import Register from './components/auth/Register'
import Login from './components/auth/Login'

import CustomersList from './components/customers/CustomersList'
import CustomerNew from './components/customers/CustomerNew'

import DepartmentsList from './components/departments/DepartmentsList'
import DepartmentForm from './components/departments/DepartmentForm'

import EmployeesList from './components/employees/EmployeesList'
import EmployeeNew from './components/employees/EmployeeNew'

import TicketsList from './components/tickets/TicketsList'
import TicketNew from './components/tickets/TicketNew'
 
import { startUserLogout } from './actions/userAction'

function App(props) {
    const handleLogout = () => {
        props.dispatch(startUserLogout())
    }


    return (
        <Router>
            <React.Fragment>
                <h1>Ticket Master</h1>

                    <Link to= "/">Home</Link> |
                    <Link to = "/dashboard">Dashboard</Link>|
                    {
                        Object.keys(props.user).length !== 0 ? (
                            <div>
                                <Link to = "/account">Account</Link> |
                                <Link to = "/customers">Customers</Link> |
                                <Link to = "/departments">Departments</Link> |
                                <Link to = '/employees'>Employees</Link> |
                                <Link to = "/tickets">Tickets</Link> |
                                <Link to = "#" onClick = {handleLogout}>Logout</Link>
                            </div>
                        ) : (
                            <div>
                                <Link to = "/users/register">Register</Link> |
                                <Link to = "/users/login">Login</Link>
                            </div>
                        )
                    }
                    
                    <Switch>
                        <Route path= "/" component= {Home} exact= {true} />  
                        <Route path = "/dashboard" component = {Dashboard} />

                        <Route path= "/users/register" component= {Register} />
                        <Route path= "/users/login" component= {Login} />

                        <Route path = "/customers" component = {CustomersList} exact = {true} />
                        <Route path = "/customers/new" component = {CustomerNew}  />

                        <Route path = "/departments" component = {DepartmentsList} exact = {true} />
                        <Route path = "/departments/new" component = {DepartmentForm} />

                        <Route path = "/employees" component = {EmployeesList} exact= {true} />
                        <Route path = "/employees/new" component = {EmployeeNew} />

                        <Route path = "/tickets" component = {TicketsList} exact = {true} />
                        <Route path = "/tickets/new" component = {TicketNew} />
                    </Switch>
                    

            </React.Fragment>
        </Router>
        
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps) (App) 