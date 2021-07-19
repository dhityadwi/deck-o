import axios from 'axios';
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

export const getPratice = (id) => async (dispatch, getState) => {
  dispatch(setLoading());

  const token = window.localStorage.getItem('token');

  const config = {
    headers: { Authorization: token },
  };

  try {
    const res = await axios.get(
      `https://deck-o.herokuapp.com/api/practiceTest/${id}`,
      config
    );

    console.log(res.data.data.TestPractice);

    dispatch({ type: GET_PRATICE, payload: res.data.data });
    dispatch({
      type: CARDS_AMOUNT,
      payload: res.data.data.TestPractice.length,
    });

    dispatch({
      type: CARDS_AMOUNT_NEED_TO_STUDY,
      payload: res.data.data.TestPractice.notStudied,
    });
  } catch (error) {
    throw error;
  }
};

export const getNeedToRecall = (id) => async (dispatch) => {
  dispatch(setLoading());

  const token = window.localStorage.getItem('token');

  const config = {
    headers: { Authorization: token },
  };

  try {
    const res = await axios.get(
      `https://deck-o.herokuapp.com/api/recall/${id}`,
      config
    );

    dispatch({ type: GET_NEED_TO_RECALL, payload: res.data.data });

    dispatch({
      type: CARDS_AMOUNT,
      payload: res.data.data.TestPractice.length,
    });

    dispatch({
      type: CARDS_AMOUNT_NEED_TO_RECALL,
      payload: res.data.data.DecksDetails.false,
    });
  } catch (error) {
    throw error;
  }
};

export const getMastered = (id) => async (dispatch) => {
  dispatch(setLoading());

  const token = window.localStorage.getItem('token');

  const config = {
    headers: { Authorization: token },
  };

  try {
    const res = await axios.get(
      `https://deck-o.herokuapp.com/api/mastered/${id}`,
      config
    );

    dispatch({ type: GET_MASTERED, payload: res.data.data });

    dispatch({
      type: CARDS_AMOUNT,
      payload: res.data.data.TestPractice.length,
    });

    dispatch({
      type: CARDS_AMOUNT_MASTERED,
      payload: res.data.data.DecksDetails.true,
    });
  } catch (error) {
    throw error;
  }
};

export const swipeLeft = (decksDetailsId, cardId) => async (dispatch) => {
  //   dispatch(setLoading());

  const token = window.localStorage.getItem('token');

  const config = {
    headers: { Authorization: token },
  };

  const data = {
    decksDetailsId: decksDetailsId,
    cardId: cardId,
  };

  try {
    const res = await axios.post(
      `https://deck-o.herokuapp.com/api/swipeLeft`,
      data,
      config
    );

    console.log(res.data + ' left');
    console.log(cardId);

    dispatch({ type: SWIPE_LEFT });
  } catch (error) {
    throw error;
  }
};

export const swipeRight = (decksDetailsId, cardId) => async (dispatch) => {
  //   dispatch(setLoading());

  const token = window.localStorage.getItem('token');

  const config = {
    headers: { Authorization: token },
  };

  const data = {
    decksDetailsId: decksDetailsId,
    cardId: cardId,
  };

  console.log(cardId);

  try {
    const res = await axios.post(
      `https://deck-o.herokuapp.com/api/swipeRight`,
      data,
      config
    );

    console.log(res.data + ' right');

    dispatch({ type: SWIPE_RIGHT });
  } catch (error) {
    throw error;
  }
};

export const setLoading = () => {
  return {
    type: LOADING,
  };
};
