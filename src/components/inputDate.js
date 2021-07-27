import React,{useRef} from 'react';
import { View, TextInput, Image, Platform } from 'react-native';
import { BLUE_COLOUR } from '../../res/drawables';
import { TextInputMask } from 'react-native-masked-text';

const InputDate = (props) => {
    const ref=useRef() ;
    return (
        <View style={{
            flexDirection: 'row',
            borderBottomColor: BLUE_COLOUR,
            borderBottomWidth: 2,
            marginTop: 20, marginBottom: 20, padding: 10
        }}>

            <Image style={{ height: 20, width: 20 }} resizeMode={"contain"} source={props.icon} />
            <TextInputMask
                ref={ref}
                style={
                    Platform.OS == 'ios' ?
                        { color: BLUE_COLOUR, padding: 3, width: '70%' } :
                        { color: BLUE_COLOUR, width: '70%' }
                }
                type={'datetime'}
                options={{
                    format: 'MM/DD/YYYY'
                }}
                placeholder={props.placeholder}
                placeholderTextColor={BLUE_COLOUR}
                onChangeText={text => props.onChangeText(text,ref)}
                value={props.value}
                
            />
        </View>

    )
}
export default InputDate;