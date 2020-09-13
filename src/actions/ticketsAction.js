import axios from "../config/axios"

export const setTickets = (tickets) => {
    return { type: 'SET_TICKETS', payload: tickets}
}


export const startGetTickets = () => {
    return(dispatch) => {
        axios.get('/tickets', {
            headers: {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            const tickets = response.data
            dispatch(setTickets(tickets))
        })
    }
}


export const addTicket = (ticket) => {
    return { type: 'ADD_TICKET', payload: ticket }
}

export const startAddTicket = (formData, redirect) => {
    return (dispatch) => {
        axios.post('/tickets', formData, {
            headers: {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            const ticket = response.data
            dispatch(addTicket(ticket))
            redirect()
        })
        .catch((err) => {
            alert(err.message)
        }) 
    }
}