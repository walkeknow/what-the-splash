import { call, put, select, takeEvery } from 'redux-saga/effects';
import { setError, setImages } from '../actions';
import { IMAGES } from '../constants';
import { fetchImages } from '../utils';

const getPage = state => state.nextPage;

// worker saga
function* handleImagesLoad() {
  try {
    const page = yield select(getPage);
    const images = yield call(fetchImages, page)
    
    // dispatch setImages action
    yield put(setImages(images))
  }
  catch (e) {

    // dispatch setError action
    yield put(setError(e.toString()))
  }
}

// watcher saga
function* watchImagesLoad() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad)
}

export default watchImagesLoad