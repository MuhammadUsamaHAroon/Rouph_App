export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const GET_CITIES = 'GET_CITIES';

const API_URL = 'https://mocki.io/v1/29fe1289-5e1b-4001-9ba5-870881c2f1b6';

export const getCities = () => {
  try {
    return async dispatch => {
      const result = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: 'GET_CITIES',
          payload: json,
        });
      } else {
        console.log('Unable to fetch!');
      }
    };
  } catch (e) {
    console.log(e);
  }
};

export const setName = name => dispatch => {
  dispatch({
    type: SET_USER_NAME,
    payload: name,
  });
};
export const setEmail = email => dispatch => {
  dispatch({
    type: SET_USER_EMAIL,
    payload: email,
  });
};
