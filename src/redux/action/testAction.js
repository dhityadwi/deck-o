import axios from 'axios';
import {
  LOADING,
  SET_TEST_QUIZ,
  SET_TEST_DECKID,
  TAKE_TEST_MULTIPLE,
  TAKE_TEST_TRUE_FALSE,
  CARDS_AMOUNT,
  GET_RESULT_TEST,
  FINISHED,
} from './types';

//initialize Test || GET DATA SOAL PERTAMA DARI SERVER
export const takeTestMultiple = (data) => async (dispatch) => {
  dispatch(setLoading());

  const token = window.localStorage.getItem('token');

  const config = {
    headers: { Authorization: token },
  };

  try {
    const res = await axios.post(
      `https://deck-o.herokuapp.com/api/getFormMultiply`,
      data,
      config
    );

    if (res.data.statusCode === 200) {
      try {
        await dispatch({ type: SET_TEST_QUIZ, payload: res.data.data });
        await dispatch({
          type: CARDS_AMOUNT,
          payload: res.data.data.totalCardDecksId,
        });
        await dispatch({
          type: SET_TEST_DECKID,
          payload: res.data.data.dtDeck[0]._id,
        });
      } catch (error) {
        throw error;
      }
    }
  } catch (error) {
    throw error;
  }
};

export const nextTestMultiple =
  (decksId, cardId, status) => async (dispatch) => {
    dispatch(setLoading());

    const token = window.localStorage.getItem('token');

    const config = {
      headers: { Authorization: token },
    };

    console.log(decksId, cardId, status + ' action');

    const data = {
      decksId: decksId,
      cardId: cardId,
      status: status,
    };

    try {
      const res = await axios.post(
        `https://deck-o.herokuapp.com/api/getFormMultiply`,
        data,
        config
      );

      console.log(res.data);

      if (res.data.statusCode === 200) {
        await dispatch({ type: SET_TEST_QUIZ, payload: res.data.data });
        await dispatch({ type: FINISHED, payload: res.data.message });
      }

      // if (res.data.message === 'Finished') {
      //   await dispatch({ type: FINISHED, payload: res.data.message });
      // }

      // if (res.data.message === 'Finished') {
      //   await dispatch(getResultTest());
      // }
    } catch (error) {
      throw error;
    }
  };

export const getResultTest = (id) => async (dispatch) => {
  dispatch(setLoading());

  const token = window.localStorage.getItem('token');

  console.log('test action');

  const config = {
    headers: { Authorization: token },
  };

  try {
    const res = await axios.get(
      `https://deck-o.herokuapp.com/api/getResultTakeTest/${id}`,
      config
    );
    console.log(res.data.data, ' from action');
    if (res.data.statusCode === 200) {
      await dispatch({ type: GET_RESULT_TEST, payload: res.data.data });
    }
  } catch (error) {
    throw error;
  }
};

// export const setId = (data) => async (dispatch) => {
//   dispatch(setLoading());

//   await dispatch({
//     type: SET_TEST_DECKID,
//     payload: data,
//   });
// };

export const setLoading = () => {
  return {
    type: LOADING,
  };
};
