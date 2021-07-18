import { SIGN_IN, SIGN_OUT, START_AUTH_LOADING,CLEAR_AUTH } from '../ActionTypes';

const authReducer = (state, action) => {
    console.log("authReducer ==> ", state, action)
    switch (action.type) {
        case SIGN_IN:
            return { ...state, ...action.payload }
        case SIGN_OUT:
            return { token: null, userInfo: null }
        case START_AUTH_LOADING:
            return {
                loading: true,
                user: null,
                error: null,
                tool: null
            }
        case CLEAR_AUTH:
            return {
                loading: false,
                user:null,
                error: null,
                tool: null
            }
        default:
            return state;
    };

}
export default authReducer;