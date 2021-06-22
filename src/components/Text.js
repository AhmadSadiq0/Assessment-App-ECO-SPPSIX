import React from 'react';
import { Text } from 'react-native';
import { BLUE_COLOUR } from '../../res/drawables';

const TextBlue = (props) => {
    return (
        <Text style={{
            fontSize: 16,
            color: BLUE_COLOUR,
            fontWeight:'bold',
            ...props.style
        }}>
            {props.children}
        </Text>
    )
}
export default TextBlue ;