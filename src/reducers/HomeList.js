import { HomeList } from "@/constant/index"
const initialState = {
    data:[]
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case HomeList:
            console.log(payload,1)
            return { ...state, ...payload }

        default:
            return state
    }
}
