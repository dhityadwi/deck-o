import axios from 'axios';
import { LOADING, CREATE_CARD, GET_CARDS_BY_DECKID } from './types';

export const createCard = (data, cardLength) => async (dispatch, getState) => {
  dispatch(setLoading());

  const token = window.localStorage.getItem('token');

  const config = {
    headers: { Authorization: token },
  };

  try {
    const res = await axios.post(
      `https://deck-o.herokuapp.com/api/createCard`,
      data,
      config
    );

    dispatch({ type: CREATE_CARD, payload: res.data.data });
  } catch (error) {
    throw error;
  }
};

export const getCardsByDeckId = (card_id) => async (dispatch, getState) => {
  dispatch(setLoading());
  const token = window.localStorage.getItem('token');

  const config = {
    headers: { Authorization: token },
  };

  try {
    const res = await axios.get(
      `https://deck-o.herokuapp.com/api/getCard/${card_id}`,
      config
    );

    if (res.data.statusCode === 200) {
      dispatch({ type: GET_CARDS_BY_DECKID, payload: res.data.data });
    }
  } catch (error) {
    throw error;
  }
};

export const setLoading = () => {
  return {
    type: LOADING,
  };
};
