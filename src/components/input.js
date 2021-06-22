import React from 'react';
import { View, TextInput, Image } from 'react-native';
import { BLUE_COLOUR } from '../../res/drawables';
const Input = (props) => {
    return (
        <View style={{
            flexDirection: 'row',
            borderBottomColor: BLUE_COLOUR,
            borderBottomWidth: 2,
            margin: 20, padding: 10
        }}>

            <Image style={{ height: 20, width: 20 }} resizeMode={"contain"} source={props.icon} />
            <TextInput
                style={{ color: BLUE_COLOUR,padding:3,width:'70%' }}
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