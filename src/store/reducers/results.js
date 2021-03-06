import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {

    switch(action.type){

            case actionTypes.LOG:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            }
            case actionTypes.REMOVE:
            
            const updatedArray = state.results.filter((result) => result.id !== action.id)
            return {
                ...state,
                results: updatedArray
            }
        default:
            return state
    }
};

export default reducer;