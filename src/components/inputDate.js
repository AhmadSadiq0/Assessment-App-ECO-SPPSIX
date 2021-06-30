import React from 'react';
import { View, TextInput, Image, Platform } from 'react-native';
import { BLUE_COLOUR } from '../../res/drawables';
import { TextInputMask } from 'react-native-masked-text';

const InputDate = (props) => {
    return (
        <View style={{
            flexDirection: 'row',
            borderBottomColor: BLUE_COLOUR,
            borderBottomWidth: 2,
            marginTop: 20, marginBottom: 20, padding: 10
        }}>

            <Image style={{ height: 20, width: 20 }} resizeMode={"contain"} source={props.icon} />
            <TextInputMask
                style={
                    Platform.OS == 'ios' ?
                        { color: BLUE_COLOUR, padding: 3, width: '70%' } :
                        { color: BLUE_COLOUR, width: '70%' }
                }
                type={'datetime'}
                options={{
                    format: 'DD/MM/YYYY'
                }}
                placeholder={'Date of birth DD/MM/YYYY'}
                placeholderTextColor={BLUE_COLOUR}
                onChangeText={text => props.onChangeText(text)}
                value={props.value}
                onChangeText={text => props.onChangeText(text)}
            />
        </View>

    )
}
export default InputDate;