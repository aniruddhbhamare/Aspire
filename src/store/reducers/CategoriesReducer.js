import * as types from '../actionsTypes';

const initialState = {
    catData: [],
    recentData:[],
}

const CategorieReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_CAT_DATA:
//   alert("adddata dispatch" +JSON.stringify(action.payload))

            // return { ...state, catData:[...state.catData, action.payload ]}
            return { ...state, catData:[...state.catData, action.payload ]}

        case types.ADD_REC_DATA:
            
            // return { ...state,recentData: state.recentData.concat(action.payload) }
            return { ...state,
                recentData: [...state.recentData ,action.payload] }

        case types.REMOVE_CAT_DATA:
            alert("RED"+ JSON.stringify(action.payload.fileSize))
            return {...state , catData:state.catData.filter(i => i.fileName != action.payload.fileName)}

            // return {...state , catData:catData.filter(i => i.fileSize != action.payload.fileSize)}
            // return {...state , catData:action.payload}


        // case types.REMOVE_CAT_DATA:
        //     //    return state.filter(catItem => catItem.id !== action.payload.id)
        //     return

        default:
            return state;
    }
}

export default CategorieReducer;





            // case ADD_ITEM :
            //     return { 
            //         ...state,
            //         arr: [...state.arr, action.newItem]
            //     }
            // OR
            
            // case ADD_ITEM :
            //     return { 
            //         ...state,
            //         arr: state.arr.concat(action.newItem)
            //     }
