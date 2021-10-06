import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Text from './Text';

const ClickableText = (props) => {
    return (
        <View style={props.style}>
            <TouchableOpacity onPress={() => props.onPress()}>
                <Text>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ClickableText;