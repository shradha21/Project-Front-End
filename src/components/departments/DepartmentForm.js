import React from 'react'

class DepartmentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            name: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    
    // handleEditDepartment = (e) => {
    //     e.preventDefault()
    //     const formData= {
    //         name: this.state.name
    //     }
    //     //console.log(formData)
    //     this.props.dispatch(startEditDepartment(formData,this.props.deptId))
    //     this.setState({
    //         name: ''
    //     })
    // }



    render() {
        //console.log(this.props)
        return(
            <div>
              <div> <br />
                <input 
                    type= "text" 
                    name= "name" 
                    value= {this.state.name} 
                    onChange= {this.handleChange} 
                /> 
              </div> <br />
                
                <button>Update</button>
            </div>
        )
    }
}

export default DepartmentForm