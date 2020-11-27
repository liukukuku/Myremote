import { GET_LIST_DATA } from '@/constant'

const initialState = {
  data: [11]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case GET_LIST_DATA:
      state.data = payload.data.users
      return state

    default:
      return state
  }
}
