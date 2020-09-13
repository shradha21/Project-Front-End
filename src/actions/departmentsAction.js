import axios from "../config/axios"

export const setDepartments = (departments) => {
    return { type: 'SET_DEPARTMENTS', payload: departments}
}

export const startGetDepartments = () => {
    return(dispatch) => {
        axios.get('/departments', {
            headers: {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            const departments = response.data
            dispatch(setDepartments(departments))
        })
    }
}



export const startAddDepartments = (formData) => {
    return (dispatch) => {
        axios.post('/departments', formData,{
            headers: {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            const departments = response.data
            dispatch(setDepartments(departments))
        })
        .catch((err) => {
            alert(err)
        })
    }
}


export const deleteDepartment = (id) => {
    return { type: 'DELETE_DEPARTMENT', payload: id }
}


export const startDeleteDepartment = (deptId) => {
    const confirmRemove = window.confirm("Are you sure?")
    if(confirmRemove) {
        return(dispatch) => {
            axios.delete(`/departments/${deptId}`, {
                headers: {
                    'x-auth' : localStorage.getItem('authToken')
                }
            })
            .then((response) => {
                const department = response.data
                dispatch(deleteDepartment(department._id))
            })
            .catch((err) => {
                alert(err)
            })
        }
    }
}     

    