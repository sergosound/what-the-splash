import { IMAGES } from '../constants';

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case IMAGES.LOAD_SUCCESS:
      return [...state, ...action.images];

    default:
      return state;
  }
};

export default errorReducer;
