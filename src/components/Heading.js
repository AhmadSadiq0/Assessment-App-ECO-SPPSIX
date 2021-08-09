import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { color } from 'react-native-reanimated';
import { BLUE_COLOUR, WHITE_COLOUR } from '../../res/drawables';
const Heading = (props) => {

    return (
        <View
            style={{
                height: 60,
                alignSelf: 'center',
                width: '90%',
                ...props.style,
                backgroundColor:
                    BLUE_COLOUR,
                borderRadius: 10,
                padding: 5
            }}
        >
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{
                    color: WHITE_COLOUR,
                    fontSize: 17,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    ...props.textStyle
                }}>
                    {props.children}
                </Text>
                {props.showMessage ? <TouchableOpacity onPress={() => props.onShowMessagePressed()}>
                    <Image style={{ width: 30, height: 30 }}
                        source={require('../../assets/images/exclamation_mark.png')} />
                </TouchableOpacity> : null}
            </View>
        </View>
    )
}
export default Heading;