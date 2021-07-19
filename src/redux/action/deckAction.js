import axios from 'axios';
import {
  LOADING,
  GET_ALL_DECKS,
  GET_DECKS_PAGINATION,
  GET_PROGRESS_DECKS_BY_USER,
  GET_DECKS_BY_USER,
  GET_DECKS_CATEGORY,
  CREATE_DECK,
  GET_DECK_BY_ID,
  CARDS_AMOUNT_MASTERED,
  CARDS_AMOUNT_NEED_TO_STUDY,
  CARDS_AMOUNT_NEED_TO_RECALL,
  EDIT_DECK,
} from './types';

//data for home page
export const getAllDecks = (page) => async (dispatch, getState) => {
  dispatch(setLoading());

  const token = window.localStorage.getItem('token');

  const config = {
    headers: { Authorization: token },
  };

  const {
    deck: { allDecksPagination },
  } = getState();

  try {
    const res = await axios.get(
      `https://deck-o.herokuapp.com/api/getDeckAll/${page}`,
      config
    );

    if (!res.data.data) {
      return 'no deck found';
    }

    const deckPagination = [...allDecksPagination, ...res.data.data];

    dispatch({ type: GET_ALL_DECKS, payload: res.data.data });
    dispatch({ type: GET_DECKS_PAGINATION, payload: deckPagination });
  } catch (error) {
    throw error;
  }
};

export const getProgressDecksByUser = () => async (dispatch) => {
  const token = window.localStorage.getItem('token');

  const config = {
    headers: { Authorization: token },
  };

  try {
    const res = await axios.get(
      `https://deck-o.herokuapp.com/api/getDecksDetailsAllByUserID`,
      config
    );

    dispatch({ type: GET_PROGRESS_DECKS_BY_USER, payload: res.data.data });
  } catch (error) {
    throw error;
  }
};

export const getDecksByUser = () => async (dispatch) => {
  dispatch(setLoading());
  const token = window.localStorage.getItem('token');

  const config = {
    headers: { Authorization: token },
  };

  try {
    const res = await axios.get(
      `https://deck-o.herokuapp.com/api/myDeck`,
      config
    );

    if (res.data.statusCode === 200) {
      dispatch({ type: GET_DECKS_BY_USER, payload: res.data.data });

      // dispatch({type: "DECK_USER_BY_ID" , payload: res.data.data.filter(deck => deck._id === ) });
    }
  } catch (error) {
    throw error;
  }
};

export const getDecksCategory = () => async (dispatch) => {
  dispatch(setLoading());

  const token = window.localStorage.getItem('token');

  const config = {
    headers: { Authorization: token },
  };

  try {
    const res = await axios.get(
      `https://deck-o.herokuapp.com/api/getCategory`,
      config
    );

    dispatch({ type: GET_DECKS_CATEGORY, payload: res.data.data });
  } catch (error) {
    throw error;
  }
};

export const getDeckById = (id) => async (dispatch) => {
  dispatch(setLoading());

  const token = window.localStorage.getItem('token');

  const config = {
    headers: { Authorization: token },
  };

  try {
    const res = await axios.get(
      `https://deck-o.herokuapp.com/api/getdecksDetailsByIdDecks/${id}`,
      config
    );

    if (res.data.data.dtDecksDetailsByIdDecks.length === 0) {
      dispatch({
        type: CARDS_AMOUNT_NEED_TO_STUDY,
        payload: res.data.data.totalStudied,
      });
      dispatch({
        type: CARDS_AMOUNT_NEED_TO_RECALL,
        payload: 0,
      });
      dispatch({
        type: CARDS_AMOUNT_MASTERED,
        payload: 0,
      });

      console.log(res.data.data.totalStudied + ' 1');
    } else {
      dispatch({
        type: CARDS_AMOUNT_NEED_TO_STUDY,
        payload: res.data.data.totalStudied,
      });
      dispatch({
        type: CARDS_AMOUNT_NEED_TO_RECALL,
        payload: res.data.data.dtDecksDetailsByIdDecks[0].false,
      });
      dispatch({
        type: CARDS_AMOUNT_MASTERED,
        payload: res.data.data.dtDecksDetailsByIdDecks[0].true,
      });
      console.log(res.data.data.dtDecksDetailsByIdDecks.length + ' 2');
    }
    dispatch({ type: GET_DECK_BY_ID, payload: res.data.data });
  } catch (error) {
    throw error;
  }
};

export const createDeck = (data) => async (dispatch) => {
  dispatch(setLoading());

  const token = window.localStorage.getItem('token');

  const config = {
    headers: { Authorization: token },
  };

  try {
    const res = await axios.post(
      `https://deck-o.herokuapp.com/api/createDeck`,
      data,
      config
    );

    dispatch({ type: CREATE_DECK, payload: res.data.data });
  } catch (error) {
    throw error;
  }
};

export const editDeck = (data, id) => async (dispatch) => {
  dispatch(setLoading());

  const token = window.localStorage.getItem('token');

  const config = {
    headers: { Authorization: token },
  };

  try {
    const res = await axios.put(
      `https://deck-o.herokuapp.com/api/updateDeck/${id}`,
      data,
      config
    );
    console.log(res.data);
    dispatch({ type: EDIT_DECK, payload: res.data.statusCode });
  } catch (error) {
    console.log(error);
  }
};

export const setLoading = () => {
  return {
    type: LOADING,
  };
};
