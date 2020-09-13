import axios from "../config/axios"

export const setEmployees = (employee) => {
    return { type: 'SET_EMPLOYEES', payload: employee }
}
 


export const startAddEmployees = (formData) => {
    return(dispatch) => {
        axios.post('/employees', formData, {
            headers: {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            if(response.data.hasOwnProperty('error')){
                alert(response.data.message)
            }else {
                const employee = response.data
                dispatch(setEmployees(employee))
            }
        })
        .catch((err) => {
            alert(err)
        })
    }
}

export const startGetEmployees = () => {
    return(dispatch) => {
        axios.get('/employees', {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            const employee = response.data
            dispatch(setEmployees(employee))
        })
        .catch((err) => {
            alert(err)
        })
    }
}

export const setDeleteEmployees = (id) => {
    return { type: 'DELETE_EMPLOYEE' , payload: id}
}


export const startDeleteEmployee = (empId) => {
    const confirmRemove = window.confirm("Are you sure?")
    if(confirmRemove) {
        return (dispatch) => {
            axios.delete(`/employees/${empId}`, {
                headers: {
                    'x-auth' : localStorage.getItem('authToken')
                }
            })
            .then((response) => {
                const employee = response.data
                dispatch(setDeleteEmployees(employee))
            })
            .catch((err) => {
                alert(err)
            })
         }
    }
    
}