import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchNews() {
  console.log('starting timeout', Date.now())
  yield setTimeout(() => {
      console.log('end of timeout', Date.now())
  }, 3000);
  yield put({type: 'RETURN_SOMETHING', res: 'mayowa is good'})
}
function* actionWatcher() {
     yield takeLatest('DO_SOMETHING', fetchNews)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}