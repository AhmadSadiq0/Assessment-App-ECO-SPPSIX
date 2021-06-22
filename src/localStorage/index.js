import AsyncStorage from '@react-native-community/async-storage';
import { BASE_URL } from '../../res/strings';

export const _storeBaseUrl = async (url) => {
    try {
        await AsyncStorage.setItem(
            BASE_URL,
            url
        );
    } catch (error) {
        // Error saving data
    }
};

export const _retrieveBaseUrl = async () => {
    try {
        const value = await AsyncStorage.getItem(BASE_URL);
        if (value !== null) {
            return value;
        }
    } catch (error) {
        // Error retrieving data
    }
    return null;
};
