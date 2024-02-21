import * as types from "./App.constants"

const initialState = {
    userName: '',
    loading: false
}

export const loginReducer = (state = initialState, action: any) =>{
    switch (action.type) {
      case types.LOGIN_REQUESTED:
        state.loading = true
        break
      case types.LOGIN_SUCCESS:
        state.loading = false
        state.userName = action.payload.userName
        break
      case types.LOGIN_FAILED:
        state.loading = false
        break
      default:
        return state
  }
  return state
}
