import React from 'react';
import { View, Text } from 'react-native';
import { color } from 'react-native-reanimated';
import { BLUE_COLOUR, WHITE_COLOUR } from '../../res/drawables';
const Heading = (props) => {

    return (
        <View
            style={{
                height:80,
                alignSelf:'center',
                width: '70%',
                ...props.style,
                backgroundColor:
                    BLUE_COLOUR,
                borderRadius: 10,
                padding: 5
            }}
        >
            <Text style={{
                color: WHITE_COLOUR,
                fontSize: 18,
                fontWeight: 'bold'
            }}>
                {props.children}
            </Text>

        </View>
    )
}
export default Heading;