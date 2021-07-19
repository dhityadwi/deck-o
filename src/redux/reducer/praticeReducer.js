import {
  LOADING,
  GET_PRATICE,
  CARDS_AMOUNT,
  SWIPE_LEFT,
  SWIPE_RIGHT,
  GET_NEED_TO_RECALL,
  GET_MASTERED,
  CARDS_AMOUNT_MASTERED,
  CARDS_AMOUNT_NEED_TO_STUDY,
  CARDS_AMOUNT_NEED_TO_RECALL,
} from '../action/types';

const initialState = {
  pratice: [],
  cardsAmount: '',
  afterSwipeColor: '',
  cardsAmountNeedToStudy: '',
  cardsAmountNeedToRecall: '',
  cardsAmountMastered: '',
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRATICE:
      return {
        ...state,
        pratice: payload,
        loading: false,
      };

    case GET_NEED_TO_RECALL:
      return {
        ...state,
        pratice: payload,
        loading: false,
      };

    case GET_MASTERED:
      return {
        ...state,
        pratice: payload,
        loading: false,
      };

    case SWIPE_LEFT:
      return {
        ...state,
      };

    case SWIPE_RIGHT:
      return {
        ...state,
      };

    case CARDS_AMOUNT:
      return {
        ...state,
        cardsAmount: payload,
        loading: false,
      };

    case CARDS_AMOUNT_NEED_TO_STUDY:
      return {
        ...state,
        cardsAmountNeedToStudy: payload,
        loading: false,
      };

    case CARDS_AMOUNT_NEED_TO_RECALL:
      return {
        ...state,
        cardsAmountNeedToRecall: payload,
        loading: false,
      };

    case CARDS_AMOUNT_MASTERED:
      return {
        ...state,
        cardsAmountMastered: payload,
        loading: false,
      };

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
