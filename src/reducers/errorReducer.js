import { IMAGES } from '../constants';

const errorReducer = (state = false, { type, payload }) => {
  switch (type) {
    case IMAGES.LOAD_FAIL:
      return payload;

    default:
      return state;
  }
};

export default errorReducer;
