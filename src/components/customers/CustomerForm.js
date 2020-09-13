import React from 'react'
import { connect } from 'react-redux'

import { startAddCustomers } from '../../actions/customersAction'

class CustomerForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            mobile: ''
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
            mobile: this.state.mobile 
        }
        this.setState({
            name: '',
            email: '',
            mobile: ''
        })
        //console.log(formData)
            this.props.dispatch(startAddCustomers(formData))
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
                        <label htmlFor = "email">email</label>
                            <input 
                                type = "text"
                                id = "email"
                                name = "email"
                                value = {this.state.email}
                                onChange = {this.handleChange} 
                            />
                    </div> <br />

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

                    <input type = "submit"  />
                </form>
            </div>
        )
    }
}

export default connect()(CustomerForm) 