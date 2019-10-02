import { IMAGES } from '../constants';

const loadImages = () => (dispatch) => {
  dispatch({
    type: IMAGES.LOAD
  })
};

const setImages = (images) => (dispatch) => {
  dispatch({
    type: IMAGES.LOAD_SUCCESS,
    payload: images
  })
};

const setError = (error) => (dispatch) => {
  dispatch({
    type: IMAGES.LOAD_FAIL,
    error
  })
};

export { loadImages, setImages, setError };
