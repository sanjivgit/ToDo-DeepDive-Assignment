const ADD_TASK = 'ADD_TASK'
const REMOVE_TASK = 'REMOVE_TASK'

export const taskReducer = (state, action) => {
    switch (action.type) {
        case ADD_TASK:
            return action.task

        case REMOVE_TASK:
            return null

        default:
            return state
    }
}