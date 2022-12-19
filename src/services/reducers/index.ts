import { combineReducers } from "redux";
import listUsers from "./listUsersReducer";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import listMoviesReducer from "./listMoviesReducer";

const rootReducer = combineReducers({
  userInfo: loginReducer,
  registerUser: registerReducer,
  listMovies: listMoviesReducer,
  listUsers: listUsers,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
