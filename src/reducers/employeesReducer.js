const employeesInitialState = []

const employeesReducer = (state= employeesInitialState,action) => {
    switch(action.type) {
        case 'SET_EMPLOYEES' : {
            return state.concat(action.payload)
        }

        case 'DELETE_EMPLOYEE' : {
            return state.filter(emp => emp.id === action.payload)
        }

        default: {
            return [...state]
        }
    }
}

export default employeesReducer