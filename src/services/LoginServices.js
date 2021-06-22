import { postRequest } from './ServiceModel';
import { _retrieveBaseUrl } from '../localStorage';
import { LOGIN } from '../../res/api';
export const loginRequest = async (username, password) => {
    let baseUrl = await _retrieveBaseUrl();

    let res = await postRequest(baseUrl + LOGIN + `LoginName=${username}&LoginPwd=${password}`);
    console.log(res)

    if (res.success)
        return ({ success: true, data: res.data })
    else
        return ({ success: false, data: null })

}