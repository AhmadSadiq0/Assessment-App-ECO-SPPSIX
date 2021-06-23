import axios from 'axios';

export const postRequest = async (url, payload) => {
    console.log('requestUrl ===> ', url)
    console.log('requestPayload ===> ', payload)

    try {
        let res = await axios.post(url, payload);
        console.log('requestResponse ===> ', res)
        return { success: true, data: res.data };
    } catch (e) {
        console.log('requestError ===> ', e)
        return { success: false, data: e.response.data };
    }

}
export const getRequest = async (url) => {
    console.log('requestUrl ===> ', url)

    try {
        let res = await axios.get(url);
        console.log('requestResponse ===> ', res)
        return res;
    } catch (e) {
        console.log('requestError ===> ', e)
        return { success: false };
    }

}