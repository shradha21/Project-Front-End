import React from 'react'
import { connect } from 'react-redux'

import { startAddEmployees } from '../../actions/employeesAction'

class EmployeeForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            mobile: '',
            department: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            department: this.state.department 
        }
        //console.log(formData)
        this.props.dispatch(startAddEmployees(formData))
        this.setState({
            name: '',
            email: '',
            mobile: '',
            department: ''
        })
        
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <label htmlFor = "name">Name</label>
                            <input 
                                type = "text"
                                id = "name"
                                name = "name"
                                value = {this.state.name}
                                onChange = {this.handleChange} 
                            />
                    </div>  <br />

                    <div>
                        <label htmlFor = "email">Email</label>
                            <input 
                                type = "text"
                                id = "email"
                                name = "email"
                                value = {this.state.email}
                                onChange = {this.handleChange} 
                            />
                    </div>  <br />

                    <div>
                        <label htmlFor = "mobile">Mobile</label>
                            <input 
                                type = "number"
                                id = "mobile"
                                name = "mobile"
                                value = {this.state.mobile}
                                onChange = {this.handleChange} 
                            />
                    </div> <br />

                    <div>
                        <label htmlFor = "department">Department</label>
                            <input 
                                type = "text"
                                id = "department"
                                name = "department"
                                value = {this.state.department}
                                onChange = {this.handleChange} 
                            />
                    </div> <br />

                    <input type = "submit"  />
                </form>
            </div>
        )
    }
}

export default connect()(EmployeeForm) 