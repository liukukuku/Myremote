const initialState = {
    token:''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "SET_LOGIN_USER":
        console.log(payload)
        sessionStorage.setItem("auth",payload)
        return { ...state,token:payload.data.data.user_id}

    default:
        return state
    }
}
