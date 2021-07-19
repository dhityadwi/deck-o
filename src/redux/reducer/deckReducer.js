import {
  GET_ALL_DECKS,
  LOADING,
  GET_DECKS_BY_USER,
  GET_DECKS_PAGINATION,
  GET_PROGRESS_DECKS_BY_USER,
  GET_DECKS_CATEGORY,
  GET_DECK_BY_ID,
  CREATE_DECK,
  CARDS_AMOUNT_MASTERED,
  CARDS_AMOUNT_NEED_TO_STUDY,
  CARDS_AMOUNT_NEED_TO_RECALL,
  EDIT_DECK,
} from '../action/types';

const initialState = {
  allDecks: [],
  allDecksPagination: [],
  deckByUser: [],
  deckProgressByUser: [],
  deckCategory: [],
  deckDetailById: [],
  deckEditValue: [],
  editDeck: [],
  createdDeck: [],
  cardsAmountNeedToStudy: '',
  cardsAmountNeedToRecall: '',
  cardsAmountMastered: '',
  loading: false,
  statusCode: '',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_DECKS:
      return {
        ...state,
        allDecks: payload,
        loading: false,
      };

    case GET_DECKS_BY_USER:
      return {
        ...state,
        deckByUser: payload,
        loading: false,
      };

    case GET_DECKS_PAGINATION:
      return {
        ...state,
        allDecksPagination: payload,
        loading: false,
      };

    case GET_PROGRESS_DECKS_BY_USER:
      return {
        ...state,
        deckProgressByUser: payload,
        loading: false,
      };

    case GET_DECKS_CATEGORY:
      return {
        ...state,
        deckCategory: payload,
        loading: false,
      };

    case GET_DECK_BY_ID:
      return {
        ...state,
        deckDetailById: payload,
        loading: false,
      };

    case CREATE_DECK:
      return {
        ...state,
        createdDeck: payload,
        loading: false,
      };

    case EDIT_DECK:
      return {
        ...state,
        statusCode: payload,
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

    case LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
