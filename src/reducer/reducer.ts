import { combineReducers } from "redux"
import { loginReducer } from "@/App/App.reducer"

const rootReducer = combineReducers({
  app: loginReducer,
})

export default rootReducer
