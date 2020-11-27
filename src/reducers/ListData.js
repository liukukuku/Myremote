import { GET_LIST_DATA } from '@/constant'

const initialState = {
  data: [11]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case GET_LIST_DATA:
      return {...state,data:payload.data.users}

    default:
      return state
  }
}
