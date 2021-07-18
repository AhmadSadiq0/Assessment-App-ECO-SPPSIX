import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from '.';
import { BLUE_COLOUR, LIGHT_BLUE_COLOUR, WHITE_COLOUR } from '../../res/drawables';

const Button = (props) => {
    return (
        <TouchableOpacity style={props.value == props.condition ? {
            margin: 5,
            height: 30,
            backgroundColor: BLUE_COLOUR,
            borderRadius: 5,
            justifyContent: 'center'
        } :
            {
                margin: 5,
                height: 30,
                backgroundColor: LIGHT_BLUE_COLOUR,
                borderRadius: 5,
                justifyContent: 'center'
            }}
            onPress={() => props.onPress()}
        >
            <Text style={props.value == props.condition?
                { alignSelf: 'center', fontSize: 14, color: WHITE_COLOUR } :
                { alignSelf: 'center', fontSize: 14 }}>{props.title}</Text>
        </TouchableOpacity>
    )
}
export default Button;