import React from 'react';
import { View } from 'react-native';
import { BLUE_COLOUR } from '../../res/drawables';
import Text from './Text';
const NumberBox = (props) => {

    return (
        <View style={{
            borderWidth: 1,
            borderColor: BLUE_COLOUR,
            height: 50,
            width: 50,
            alignSelf: 'center',
            justifyContent:'center'
        }}>
            <Text style={{ fontSize: 20,alignSelf:'center' }}>{props.text}</Text>
        </View>
    )
}
export default NumberBox;