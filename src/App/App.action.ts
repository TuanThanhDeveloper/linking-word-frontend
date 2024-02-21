import * as types from "./App.constants"

export interface LoginModel {
    userName: string,
    loading: boolean
}
export const loginRequested = () => ({
  type: types.LOGIN_REQUESTED
})

export const loginSuccess = (payload: LoginModel) => ({
  type: types.LOGIN_SUCCESS,
  payload
})

export const loginFailed = (payload: LoginModel) => ({
  type: types.LOGIN_FAILED,
  payload
})
