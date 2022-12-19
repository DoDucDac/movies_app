import { createBrowserHistory } from "history";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { ACCESS_TOKEN, ENDPOINTS, ROUTES } from "../../constants";
import { showErrorMessage } from "../../utils/messageUtils";
import { userLoginFailure, userLoginSuccess } from "../actions/loginAction";
import { USER_LOGIN_REQUEST } from "../constants";
import { apiCall } from "./api";

function* fetchLoginSaga(action: any): any {
  const history = createBrowserHistory();
  try {
    const res: any = yield call(
      apiCall,
      "POST",
      ENDPOINTS.LOGIN,
      action.payload
    );
    yield put(userLoginSuccess(res));
    localStorage.setItem(ACCESS_TOKEN, res.content.accessToken);
    setTimeout(() => {
      history.push(ROUTES.HOME);
    }, 1500);
  } catch (err: any) {
    yield put(userLoginFailure());
    showErrorMessage(err);
  }
}

function* loginSaga() {
  yield all([takeLatest(USER_LOGIN_REQUEST, fetchLoginSaga)]);
}

export default loginSaga;
