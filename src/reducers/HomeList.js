const initialState = {
    data:[]
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case "HOME_LIST":
            state.data=payload.data.users
            return { ... state }

        default:
            return state
    }
}
