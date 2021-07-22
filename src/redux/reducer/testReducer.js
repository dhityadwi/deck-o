import {
  LOADING,
  SET_TEST_QUIZ,
  SET_TEST_DECKID,
  TAKE_TEST_MULTIPLE,
  TAKE_TEST_TRUE_FALSE,
  CARDS_AMOUNT,
  GET_RESULT_TEST,
  FINISHED,
} from '../action/types';

const initialState = {
  testQuiz: [],
  testDeckId: null,
  resultTest: [],
  finished: '',
  totalQuiz: null,
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TEST_QUIZ:
      return {
        ...state,
        testQuiz: payload,
        loading: false,
      };

    case SET_TEST_DECKID:
      return {
        ...state,
        testDeckId: payload,
        loading: false,
      };

    case CARDS_AMOUNT:
      return {
        ...state,
        totalQuiz: payload,
        loading: false,
      };

    case GET_RESULT_TEST:
      return {
        ...state,
        resultTest: payload,
        loading: false,
      };

    case FINISHED:
      return {
        ...state,
        finished: payload,
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
