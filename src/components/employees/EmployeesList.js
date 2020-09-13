import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { findDepartment } from '../../selectors/departmentsSelector'

import { startGetEmployees, startDeleteEmployee } from '../../actions/employeesAction'

class EmployeesList extends React.Component {
    
    componentDidMount() {
        if(this.props.employees.length === 0) {
            this.props.dispatch(startGetEmployees())
        }
    }

    render() {
        return (
            <div>
                <h2>Listing Employees- {this.props.employees.length}</h2>
                <table border = "1">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Department</th>
                            <th>Actions</th>
                            <th>Remove</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.props.employees.map(emp => {
                                const department = findDepartment(this.props.departments,emp.department)
                                return (
                                    <tr key = {emp._id}>
                                        <td>{emp._id}</td>
                                        <td>{emp.name}</td>
                                        <td>{emp.email}</td>
                                        <td>{emp.mobile}</td>
                                        <td>{department ? department.name : ''}</td>
                                        <td><button>Show</button></td>
                                        <td><button onClick = {() => {this.props.dispatch(startDeleteEmployee(emp._id))}}>Remove</button></td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>

                </table>

                <Link to = "/employees/new">Add Employee</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        employees: state.employees,
        departments: state.departments
    }
}

export default connect(mapStateToProps)(EmployeesList) 