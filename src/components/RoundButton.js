import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { ROUND_BTN_IMG } from '../../res/drawables';
const RoundButton = (props) => {

    return (
        <TouchableOpacity
            onPress={() => props.onPress()}
        >
            <Image style={{ width: 40, height: 40, ...props.style }} source={ROUND_BTN_IMG} />

        </TouchableOpacity>
    )
}
export default RoundButton;