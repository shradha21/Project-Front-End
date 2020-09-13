import React from 'react'
import { connect } from 'react-redux'

import { startRegisterUser } from '../../actions/userAction'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: ''
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
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        this.setState({
            username: '',
            email: '',
            password: ''
        })
        //console.log(formData)
        const redirect = () => {
            return this.props.history.push('/users/login')
        }

        this.props.dispatch(startRegisterUser(formData,redirect))
    }



    render() {
        return(
            <div>
                <h2>Register with us</h2>

                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <label htmlFor = "username">username</label>
                            <input 
                                type = "text"
                                id = "username"
                                name = "username"
                                value = {this.state.username}
                                onChange = {this.handleChange} 
                            />
                    </div> <br />

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
                        <label htmlFor = "password">password</label>
                            <input 
                                type = "password"
                                id = "password"
                                name = "password"
                                value = {this.state.password}
                                onChange = {this.handleChange} 
                            />
                    </div> <br />

                    <input type = "submit" value = "Register" />

                </form>
            </div>
        )
    }
}

export default connect()(Register)