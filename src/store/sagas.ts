import AuthSaga from "./auth/saga";

export default function* rootSaga() {
  yield AuthSaga();
}
