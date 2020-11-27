import { ListData } from '@/constant'

const initialState = {
  data: [11]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case ListData:
      state.data = payload.data.users
      return state

    default:
      return state
  }
}
