import { IMAGES } from '../constants';

const loadingReducer = (state = true, { type }) => {
  switch (type) {
    case IMAGES.LOAD:
      return true;
    case IMAGES.LOAD_SUCCESS:
      return false;
    case IMAGES.LOAD_FAIL:
      return true;

    default:
      return state;
  }
};

export default loadingReducer;
