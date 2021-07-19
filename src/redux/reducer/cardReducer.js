import { LOADING, CREATE_CARD, GET_CARDS_BY_DECKID } from '../action/types';

const initialState = {
  createCard: [],
  cardsByDeckId: [],
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_CARD: {
      return {
        ...state,
        createCard: payload,
        loading: false,
      };
    }

    case GET_CARDS_BY_DECKID: {
      return {
        ...state,
        cardsByDeckId: payload,
        loading: false,
      };
    }

    case LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    default:
      return state;
  }
};
