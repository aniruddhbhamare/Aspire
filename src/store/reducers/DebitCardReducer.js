import * as types from '../actionsTypes';

const initialState = {
    cardData: [],
    isLoading: true,
}

const DebitCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.PENDING_CARD_DATA:
            return { ...state, isLoading: true }

        case types.ADD_CARD_DATA:
            return { ...state, isLoading: false, cardData: [...state.cardData, action.payload] }

        case types.REMOVE_CARD_DATA:
            return { ...state, caedData: state.cardData.filter(i => i.id != action.payload.id) }

        default:
            return state;
    }
}

export default DebitCardReducer;
