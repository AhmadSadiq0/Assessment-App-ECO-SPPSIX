import React from 'react';
import { Text, View } from 'react-native';
import { BLUE_COLOUR } from '../../res/drawables';
import ToogleButton from './TwoWayToogleButton';
const OptionsText = (props) => {
    return (
        <View style={{ justifyContent: 'center' }}>

            <Text style={{
                fontSize: 16,
                color: BLUE_COLOUR,
                fontWeight: 'bold',
                ...props.style
            }}>
                {props.text}
            </Text>
            <ToogleButton
                title1={props.title1}
                title2={props.title2}
                title3={props.title3}
                thirdButton={props.thirdButton}
                onPress={(btnNumber) => props.onPress(btnNumber)}

            />

        </View>

    )
}
export default OptionsText;