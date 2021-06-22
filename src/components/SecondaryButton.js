import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const PrimaryButton = (props) => {

    return (
        <TouchableOpacity style={{
            width: 170,
            height: 55,
            backgroundColor: '#FCCA67',
            borderRadius: 20,
            justifyContent: 'center'
        }}
            onPress={() => props.onPress()}
        >
            <Text style={{
                color: '#2E68B2',
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