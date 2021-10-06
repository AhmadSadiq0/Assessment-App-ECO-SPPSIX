import { postRequest } from './ServiceModel';
import { _retrieveBaseUrl } from '../localStorage';
import { FORGET_PASSWORD, LOGIN } from '../../res/api';

export const loginRequest = async (username, password) => {
    let baseUrl = await _retrieveBaseUrl();
    try {
        let res = await postRequest(baseUrl + LOGIN + `LoginName=${username}&LoginPwd=${password}`);
        console.log(res)
        if (res.success)
            return ({ success: true, data: res.data })
        else
            return ({ success: false, data: res.data })
    } catch (e) {
        return ({ success: false, data: 'Please check your internet connection' })

    }
}

export const sigupRequest = async (payload) => {
    let baseUrl = await _retrieveBaseUrl();

    let res = await postRequest(baseUrl + SIGNUP, payload);
    console.log(res)
    if (res.success)
        return ({ success: true, data: res.data })
    else
        return ({ success: false, data: res.data })
}

export const forgetPasswordRequest = async (username) => {
    let baseUrl = await _retrieveBaseUrl();
    try {
        let res = await postRequest(baseUrl + FORGET_PASSWORD + username);
        console.log(res)
        if (res.success)
            return ({ success: true, data: res.data })
        else
            return ({ success: false, data: res.data })
    } catch (e) {
        return ({ success: false, data: 'Please check your internet connection' })

    }
}