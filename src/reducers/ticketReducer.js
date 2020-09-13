const ticketInitialState = []

const ticketReducer = (state = ticketInitialState,action) => {
    switch(action.type) {
            case 'SET_TICKETS' : {
                return [...action.payload]
            }
            case 'ADD_TICKET' : {
                return state.concat(action.payload)
            }


        default: {
            return [...state]
        }
    }
}

export default ticketReducer