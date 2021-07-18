import createDataContext from './CreateDataContext';
import { AuthReducer } from '../reducers'
import { CLEAR_AUTH, SIGN_IN, SIGN_OUT, START_AUTH_LOADING } from '../ActionTypes';
import { loginRequest } from '../../services/LoginServices';

export const signIn = dispatch => {
    return async (username, password, tool) => {
        dispatch({ type: START_AUTH_LOADING })
        let res = await loginRequest(username, password);
        console.log(res)
        if (res.success) {
            dispatch({
                type: SIGN_IN,
                payload: {
                    user: res.data,
                    tool,
                    error: null,
                    loading: false
                }
            })
        }
        else {
            dispatch({
                type: SIGN_IN,
                payload: {
                    user: null,
                    error: 'Wrong username or password!',
                    loading: false
                }
            })
        }
    }
}
export const signOut = dispatch => {
    return () => {
        dispatch({ type: SIGN_OUT, payload: {} })
    }
}
export const clearAuth = dispatch => {
    return () => {
        dispatch({ type: CLEAR_AUTH })
    }
}


export const { Context, Provider } = createDataContext(
    AuthReducer, { signIn, signOut,clearAuth }, { user: null, error: null, tool: null }
);