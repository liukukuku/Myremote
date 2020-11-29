import { SET_ADD_DATA } from '@/constant'
const initialState = {}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_ADD_DATA:
            return { ...state, ...payload }
        default:
            return state
    }
}
