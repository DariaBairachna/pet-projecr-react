import * as actionTypes from '../actions/actionTypes';

export default (state = {}, action: any) => {
    switch(action.type){
        case actionTypes.SIGN_IN: {
            return { ...state, ...action.data };
        }
        default:
            return state
    }
}