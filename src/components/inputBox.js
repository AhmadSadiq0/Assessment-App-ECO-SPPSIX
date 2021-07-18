import React from 'react';
import { View, TextInput, Image, Platform } from 'react-native';
import { LIGHT_BLUE_COLOUR, BLUE_COLOUR } from '../../res/drawables';
const Input = (props) => {
    return (

        <TextInput
            multiline={true}
            style={
                {
                    borderRadius: 5,
                    margin: 5,
                    padding:5,
                    justifyContent: "flex-start",
                    backgroundColor: LIGHT_BLUE_COLOUR,
                    ...props.style,
                    textAlignVertical: 'top',
                    color:BLUE_COLOUR


                }
            }
            placeholder={props.placeholder}
            underlineColorAndroid='rgba(0,0,0,0)'
            value={props.value}
            secureTextEntry={props.secureTextEntry}
            placeholderTextColor={BLUE_COLOUR}
            editable={props.editable}
            onChangeText={text => props.onChangeText(text)}
        />

    )
}
export default Input;