import { take, fork, call, put } from 'redux-saga/effects';

import { IMAGES } from '../constants';
import { fetchImageStats } from '../api';
import { loadImageStats, setImageStats, setImageStatsError } from '../actions';

function* handleStatsRequest(id) {
  for (let i = 0; i < 3; i++) {
    try {
      yield put(loadImageStats(id));
      const res = yield call(fetchImageStats, id);
      yield put(setImageStats(id, res.downloads.total));
      return true;
    }
    catch (error) {}
  }

  yield put(setImageStatsError(id))
}

function* watchStatsSaga() {
  while (true) {
    const images = yield take(IMAGES.LOAD_SUCCESS);
    for (let i = 0; i < images.payload.length; i++) {
      yield fork(handleStatsRequest, images.payload[i].id)
    }
  }
}

export default watchStatsSaga;
