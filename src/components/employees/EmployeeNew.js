import React from 'react'
import EmployeeForm from '../employees/EmployeeForm'

class EmployeeNew extends React.Component {
    render() {
        return (
            <div>
                <h2>Add Employees</h2>
                <EmployeeForm />
            </div>
            
        )
    }
}

export default EmployeeNew