import React from 'react'
import { connect } from 'react-redux'

import { startGetDepartments,startAddDepartments, startDeleteDepartment } from '../../actions/departmentsAction'

class DepartmentsList extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            name: '' 
        }
    }

    componentDidMount() {
        if(this.props.departments.length === 0) {
            this.props.dispatch(startGetDepartments)
        }
    }
      
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAddDepartment = (e) => {
        e.preventDefault()
        const formData = {
            name: this.state.name
        }
        //console.log(formData)
        this.setState({
            name: ''
        })
        this.props.dispatch(startAddDepartments(formData))
    }



    render() {
        return (
            <div>
                <h2>Listing Departments - {this.props.departments.length} </h2>
                <table border = "1">
                    <thead>
                        <tr>
                            <th>Departments</th>
                            <th>Actions</th>
                            <th>Remove</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.props.departments.map((dept,i) => {
                                return (
                                    <tr key = {i}>
                                        <td>{dept.name}</td>
                                        <td><button>Show</button></td>
                                        <td><button onClick = {() => {this.props.dispatch(startDeleteDepartment(dept._id))}}>Remove</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                <h3>Add Department</h3>

                <div>
                <input 
                    type= "text" 
                    name= "name" 
                    value= {this.state.name} 
                    onChange= {this.handleChange} 
                />
                </div> <br />

                <button onClick = {this.handleAddDepartment}>Add</button> <br />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        departments: state.departments
    }
}

export default connect(mapStateToProps)(DepartmentsList)