import axios from "../config/axios"

export const setCustomers = (customers) => {
   return { type: 'SET_CUSTOMERS', payload: customers }
}


export const startGetCustomers = () => {
    return(dispatch) => {
        axios.get('/customers', {
            headers: {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            const customers = response.data
            dispatch(setCustomers(customers))
        })
        .catch((err) => {
            alert(err)
        })
    }
}


export const startAddCustomers = (formData) => {
    return(dispatch) => {
        axios.post('/customers', formData, {
            headers: {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            if(response.data.hasOwnProperty('errors')) {
                alert(response.data.message)
            }else {
                alert('Added Customer Successfully')
                const customers = response.data
                dispatch(setCustomers(customers))
            }
        })
        .catch((err) => {
            alert(err)
        })
    }
}

export const deleteCustomer = (id) => {
    return { type: 'DELETE_CUSTOMER', payload: id}
}

export const startDeleteCustomer = (custId) => {
    const confirmRemove = window.confirm("Are you sure?")
    if(confirmRemove) {
        return(dispatch) => {
            axios.delete(`/customers/${custId}`, {
                headers: {
                    'x-auth' : localStorage.getItem('authToken')
                }
            })
            .then((response) => {
                const customer = response.data
                dispatch(deleteCustomer(customer._id))
            })
            .catch((err) => {
                alert(err)
            })
        }
    }
}

// export const startEditCustomer = (custId) => {
//     return(dispatch) => {
//         axios.put(`/customers/${custId}`)
//     }
// }