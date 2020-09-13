const customerInitialState = []

const customerReducer = (state = customerInitialState, action) => {
        switch(action.type) {
            case 'SET_CUSTOMERS' : {
                return state.concat(action.payload)
            }

            case 'DELETE_CUSTOMER' : {
                return state.filter(cust => cust._id !== action.payload)
            }

            default: {
                return [...state]
            }
        }
}

export default customerReducer