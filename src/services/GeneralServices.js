import { postRequest } from './ServiceModel';
import { _retrieveBaseUrl } from '../localStorage';
import { GET_DISTRICTS } from '../../res/api';

export const getDistricts = async () => {
    // let baseUrl = await _retrieveBaseUrl();
    let baseUrl='http://ec-sppsix.com/apiMob/api'
    let res = await postRequest(baseUrl + GET_DISTRICTS);

    if (res.success) {
        let data = [];
        res.data.map((item) => {
            let obj = {
                label: item.Name,
                value: item['LEA_RCDTS']
            }
            data.push(obj)
        })
        return ({ success: true, data: data})
    }
    else
        return ({ success: false, data: res.data })
}

