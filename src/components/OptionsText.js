import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { BLUE_COLOUR } from '../../res/drawables';
import ToogleButton from './TwoWayToogleButton';
import { EXCLAMARION_BLUE_IMG } from '../../res/drawables';
const OptionsText = (props) => {
    return (
        <View style={{ justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{
                    fontSize: 16,
                    color: BLUE_COLOUR,
                    fontWeight: 'bold',
                    ...props.style
                }}>
                    {props.text}
                </Text>
                {props.showExclamation ? <TouchableOpacity onPress={() => props.onExclamationPressed()}>
                    <Image style={{ width: 20, height: 20 }} source={EXCLAMARION_BLUE_IMG} />
                </TouchableOpacity> :null}
            </View>
            <ToogleButton
                title1={props.title1}
                title2={props.title2}
                title3={props.title3}
                thirdButton={props.thirdButton}
                onPress={(btnNumber) => props.onPress(btnNumber)}

            />

        </View>

    )
}
export default OptionsText;