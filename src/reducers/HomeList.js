import { HomeList } from "@/constant/index"
const initialState = {

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
