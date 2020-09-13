import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { findCustomer } from '../../selectors/customersSelector'
import { findDepartment } from '../../selectors/departmentsSelector'
import { selectEmpName } from '../../selectors/employeesSelector'
import { startGetTickets } from '../../actions/ticketsAction'

class TicketsList extends React.Component {
    constructor() {
        super()
        this.state = {
            search: ''
        }
    }

    componentDidMount() {
        this.props.dispatch(startGetTickets())
    }
    

    render() {
        return (
            <div>
                <h2>Listing Tickets - {this.props.tickets.length} </h2>
                <table border = "1">
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Customer</th>
                            <th>Department</th>
                            <th>Employees</th>
                            <th>Priority</th>
                            <th>Message</th>
                            <th>Action</th>
                            <th>Remove</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                           this.props.tickets.filter(tick => tick.code.includes(this.state.search)).map(ticket => {
                            const customer = findCustomer(this.props.customers, ticket.customer)
                            const department = findDepartment(this.props.departments, ticket.department)
                            const employeeNames = selectEmpName(this.props.employees, ticket.employees.map(emp => emp.employee))
                            return (
                                <tr key={ticket._id}>
                                    <td>{ticket.code}</td>
                                    <td><Link to={`/customers/${ticket.customer}`}>{customer ? customer.name : ''}</Link></td>
                                    <td>{department ? department.name : ''}</td>
                                    <td> { employeeNames} </td>
                                    <td>{ ticket.priority }</td>
                                    <td> { ticket.message }</td>
                                    <td>
                                        <Link to={`/tickets/edit/${ticket._id}`}>Edit</Link> </td>
                                       <td> <button onClick={() => {
                                            this.handleRemove(ticket._id)
                                        }}>remove</button> </td>
                                    
                                </tr>
                            )
                        })
                        }
                        
                    </tbody>

                </table>

                <Link to = "/tickets/new">Add Ticket</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tickets: state.tickets,
        departments: state.departments, 
        customers: state.customers, 
        employees: state.employees,
    }
}

export default connect(mapStateToProps)(TicketsList) 