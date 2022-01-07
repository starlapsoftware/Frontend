import { combineReducers } from "redux";
import { authentication } from "./authentication.reducer";
import { loginReducer } from "./loginReducer";

const reducer = combineReducers({
  authentication,
  loginReducer,
});

export default reducer;
