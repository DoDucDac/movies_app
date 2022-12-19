import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import listMoviesReducer from "./listMoviesReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  userInfo: loginReducer,
  registerUser: registerReducer,
  listMovies: listMoviesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
