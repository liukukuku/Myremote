import { ListData } from '../constant/index'

const initialState = {
  data: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case ListData:
      return { ...state, data: payload.data }

    default:
      return state
  }
}
