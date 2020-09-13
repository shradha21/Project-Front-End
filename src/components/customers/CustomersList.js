import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { startGetCustomers, startDeleteCustomer } from '../../actions/customersAction'

class CustomersList extends React.Component {

    componentDidMount() {
        if(this.props.customers.length === 0) {
            this.props.dispatch(startGetCustomers())
        }
    }

    handleUpdateCustomer = (id) => {
        this.props.history.push('/CustomerForm')
        localStorage.setItem('custId',id)
    }

    
    render() {
        return(
            <div>
                <h2>Listing of customers- { this.props.customers.length } </h2>
                <table border = "1">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Actions</th>
                            <th>Remove</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.props.customers.map((cust,i) => {
                                return (
                                    <tr key= {i}>
                                        <td>{++i}</td>
                                        <td>{cust.name}</td>
                                        <td>{cust.email}</td>
                                        <td>{cust.mobile}</td>
                                        <td><button onClick = {() => {this.handleUpdateCustomer(cust._id)}}>show</button></td>
                                        <td><button onClick = {() => {this.props.dispatch(startDeleteCustomer(cust._id))}}>remove</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                <Link to = "/customers/new">Add Customer</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        customers: state.customers
    }
}

export default connect (mapStateToProps)(CustomersList)