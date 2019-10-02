import { IMAGES } from '../constants';

const imagesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case IMAGES.LOAD_SUCCESS:
      return [...state, ...payload];

    default:
      return state;
  }
};

export default imagesReducer;
