import React from 'react'
import { connect } from 'react-redux'

import { startLoginUser } from '../../actions/userAction'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
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
            email: this.state.email,
            password: this.state.password
        }
        this.setState({
            email: '',
            password: ''
        })
        //console.log(formData)
        const redirect = () => {
            return this.props.history.push('/')
        }

        this.props.dispatch(startLoginUser(formData,redirect))
    }



    render() {
        return (
            <div>
                <h2>Login With Us</h2>

                <form onSubmit = {this.handleSubmit}>
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

                    <input type = "submit" value = "Login" />

                </form>
            </div>
        )
    }
}

export default connect() (Login) 