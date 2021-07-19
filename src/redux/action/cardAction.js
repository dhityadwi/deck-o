import axios from 'axios';
import { LOADING, CREATE_CARD } from './types';

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

export const getCardsByDeckId = () => async (dispatch, getState) => {
  dispatch(setLoading());
  const token = window.localStorage.getItem('token');

  const config = {
    headers: { Authorization: token },
  };

  const {
    deck: { createdDeck },
  } = getState();

  try {
    const res = await axios.get(
      `https://deck-o.herokuapp.com/api/getCard/${createdDeck._id}`
    );
  } catch (error) {
    throw error;
  }
};

export const setLoading = () => {
  return {
    type: LOADING,
  };
};
