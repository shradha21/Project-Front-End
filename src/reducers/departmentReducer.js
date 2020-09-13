const departmentInitialReducer = []

const departmentReducer = (state = departmentInitialReducer,action) => {
    switch(action.type) {
        case 'SET_DEPARTMENTS': {
            return state.concat(action.payload)
        }
        case 'DELETE_DEPARTMENT': {
            return state.filter(dept => dept.id === action.payload)
        }

        default: {
            return [...state]
        }
    }
}

export default departmentReducer