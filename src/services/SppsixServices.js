import { postRequest } from './ServiceModel';
import { CREATE_SPPSIX_ENTRY } from '../../res/api';
import {_retrieveBaseUrl} from '../localStorage'
export const createRecord = async (payload) => {
    let baseUrl = await _retrieveBaseUrl();
    try {
        let res = await postRequest(baseUrl + CREATE_SPPSIX_ENTRY, payload)
        return { success: true }
    } catch (e) {
        console.log(e)
        return { success: false }
    }
}