import { postRequestWithNoResponseData } from './ServiceModel';
import { CREATE_ECO_ENTRY } from '../../res/api';
import { _retrieveBaseUrl } from '../localStorage'

export const createRecord = async (payload) => {
    let baseUrl = await _retrieveBaseUrl();
    try {
        let res = await postRequestWithNoResponseData(baseUrl + CREATE_ECO_ENTRY, payload)
        return res
    } catch (e) {
        console.log(e)
        return { success: false }
    }
}