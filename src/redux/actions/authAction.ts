import * as actionTypes from './actionTypes';
import axiosInstance from '../../services/axios';


export const signIn = (data: any) => {
    return {
        type: actionTypes.SIGN_IN,
        data
    }
}

export const getData = (data: any) => {
    return async (dispatch: any) => {
        const responce = await axiosInstance.post('/v2/api-endpoint', { handlerEnabled: false })
        dispatch(signIn(responce));
    }
}
