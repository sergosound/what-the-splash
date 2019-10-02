import { IMAGES, STATS } from '../constants';

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
    payload: error
  })
};

const loadImageStats = (id) => (dispatch) => {
  dispatch({
    type: STATS.LOAD,
    id
  })
};

const setImageStats = (id, downloads) => (dispatch) => {
  dispatch({
    type: STATS.LOAD_SUCCESS,
    id,
    downloads
  })
};

const setImageStatsError = (id) => (dispatch) => {
  dispatch({
    type: STATS.LOAD_FAIL,
    id
  })
};

export {
  loadImages,
  setImages,
  setError,
  loadImageStats,
  setImageStats,
  setImageStatsError
};
