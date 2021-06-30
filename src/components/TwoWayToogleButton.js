import React, { useState } from 'react';
import { View, Button } from 'react-native';
import {  BLUE_COLOUR, } from '../../res/drawables';
const ToogleButton = (props) => {
    const [btn, setBtn] = useState(0);


    return (
        <View style={{
            flexDirection: 'row',
            borderColor: BLUE_COLOUR,
            backgroundColor: 'rgba(255,255,255,0.7)',
            width: 300,
            borderRadius: 10,
            justifyContent: 'center'
        }}>
            <Button
                title={props.title1}
                onPress={() => { props.onPress(1); setBtn(1) }}
                color={btn == 1 ? BLUE_COLOUR : '#A9A9A9'}
            />
            <Button
                title={props.title2}
                onPress={() => { props.onPress(2); setBtn(2) }}
                color={btn == 2 ? BLUE_COLOUR : '#A9A9A9'}
            />
            {props.thirdButton?<Button
                title={props.title3}
                onPress={() => { props.onPress(3); setBtn(3) }}
                color={btn == 3 ? BLUE_COLOUR : '#A9A9A9'}
            />:null}
        </View>
    )
}
export default ToogleButton;