import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { BACK_IMG } from '../../res/drawables';
const BackButton = (props) => {

    return (
        <TouchableOpacity
            onPress={() => props.onPress()}
        >
            <Image style={{ width: 40, height: 40 }} source={BACK_IMG} />

        </TouchableOpacity>
    )
}
export default BackButton;