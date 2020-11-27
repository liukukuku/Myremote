const initialState = {
    token:''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "SET_REG_USER":
        // sessionStorage.setItem("auth",payload)
        console.log(payload)
        return { ...state,token:payload.info}

    default:
        return state
    }
}
