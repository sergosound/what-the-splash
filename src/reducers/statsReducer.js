import { STATS } from '../constants';

const statsReducer = (state = {}, { type, id, downloads }) => {
  switch (type) {
    case STATS.LOAD:
      return {
        ...state,
        [id]: {
          isLoading: true,
          downloads: null,
          error: false
        }
      };
    case STATS.LOAD_SUCCESS:
      return {
        ...state,
        [id]: {
          isLoadings: false,
          downloads,
          error: false
        }
      };
    case STATS.LOAD_FAIL:
      return {
        ...state,
        [id]: {
          isLoading: false,
          downloads: null,
          error: true
        }
      };

    default:
      return state;
  }
};

export default statsReducer;
