import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const PrimaryButton = (props) => {

    return (
        <TouchableOpacity style={{
            width: 170,
            height: 55,
            backgroundColor: '#2E68B2',
            borderRadius: 20,
            justifyContent: 'center',
            ...props.style
        }}
            onPress={() => props.onPress()}
        >
            <Text style={{
                color: '#ffffff',
                alignSelf: 'center',
                fontSize: 16,
                fontWeight: 'bold'
            }}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}
export default PrimaryButton;