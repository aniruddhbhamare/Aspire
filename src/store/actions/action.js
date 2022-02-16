import * as types from '../actionsTypes';

export const addDebitCardData = () => {
  // alert("inside action")
  return dispatch => {
    dispatch(addCardDataPending())
    // fetch('https://retoolapi.dev/2feJeM/carddata')
    fetch('https://retoolapi.dev/6lBHwD/creditcarddata')
      .then((response) => response.json())
      .then((json) => {
        // return json;
        // alert(JSON.stringify(json))
        dispatch(addCardData(json))
      })
      .catch((error) => {
        console.error(error);
      });
    // return addCardData(data);
  }
}

const addCardData = (payload) => ({
  type: types.ADD_CARD_DATA,
  payload
})

const addCardDataPending = () => ({
  type: types.PENDING_CARD_DATA,
})


