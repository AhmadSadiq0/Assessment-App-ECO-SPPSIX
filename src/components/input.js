import React from 'react';
import { View, TextInput, Image, Platform } from 'react-native';
import { BLUE_COLOUR } from '../../res/drawables';
const Input = (props) => {
    return (
        <View style={{
            flexDirection: 'row',
            borderBottomColor: BLUE_COLOUR,
            borderBottomWidth: 2,
            marginTop: 20, marginBottom: 20, padding: 10
        }}>

            <Image style={Platform.OS == 'ios' ? { height: 20, width: 20 } : { height: 20, width: 20, marginTop: 12 }} resizeMode={"contain"} source={props.icon} />
            <TextInput
                style={
                    Platform.OS == 'ios' ?
                        { color: BLUE_COLOUR, padding: 3, width: '70%' } :
                        { color: BLUE_COLOUR, width: '70%' }
                }
                placeholder={props.placeholder}
                underlineColorAndroid='rgba(0,0,0,0)'
                value={props.value}
                secureTextEntry={props.secureTextEntry}
                placeholderTextColor={BLUE_COLOUR}
                onChangeText={text => props.onChangeText(text)}
            />
        </View>

    )
}
export default Input;