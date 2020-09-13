import React from 'react'
import CustomerForm from './CustomerForm'

class TicketNew extends React.Component {

    render() {
        return (
            <div>
                <h2>Add Customer</h2>
                <CustomerForm />
            </div>
        )
    }
}

export default TicketNew