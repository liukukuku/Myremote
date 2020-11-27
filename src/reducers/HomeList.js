const initialState = {
    data:[]
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case "HOME_LIST":
            return { ...state,data:payload.data.users}

        default:
            return state
    }
}
