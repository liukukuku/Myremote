const initialState = {
    token:''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "SET_LOGIN_USER":
        sessionStorage.setItem("auth",payload)
        return { ...state,token:payload.data.data.user_id}

    default:
        return state
    }
}
