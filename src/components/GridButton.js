import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { BLUE_COLOUR, ROUND_BTN_WHITE_IMG } from '../../res/drawables';
import Text from './Text';
const GridButton = (props) => {
    return (
        <TouchableOpacity
            style={{
                width: '40%',
                height: 170,
                backgroundColor: BLUE_COLOUR,
                padding: 10,
                borderRadius: 10,
                ...props.style
            }}
            onPress={() => props.onPress()}
        >
            <Text style={{ color: '#ffffff' }}>{props.text}</Text>
            <Image style={{
                width: 30, height: 30,
                alignSelf: 'flex-end', margin: 5,
                position: 'absolute', bottom: 0
            }} source={ROUND_BTN_WHITE_IMG} />
        </TouchableOpacity>
    )
}
export default GridButton;