import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from '.';
import { BLUE_COLOUR, LIGHT_BLUE_COLOUR, WHITE_COLOUR } from '../../res/drawables';

const Button = (props) => {
    return (
        <TouchableOpacity style={props.value == props.condition ? {
            margin: 5,
            padding: 10,
            backgroundColor: BLUE_COLOUR,
            borderRadius: 5,
        } :
            {
                margin: 5,
                padding: 10,
                backgroundColor: LIGHT_BLUE_COLOUR,
                borderRadius: 5,
            }}
            onPress={() => props.onPress()}
        >
            <Text style={props.value == props.condition ?
                { fontSize: 14, color: WHITE_COLOUR } :
                { fontSize: 14 }}>{props.title}</Text>
        </TouchableOpacity>
    )
}
export default Button;