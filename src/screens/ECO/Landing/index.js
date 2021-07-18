import React, { useState, useRef, useEffect } from 'react';
import { ImageBackground, View, Dimensions } from 'react-native';
import { Text, RoundButton, BackButton, Heading, InputDate } from '../../../components';
import { BACKGROUND_ONE_IMG } from '../../../../res/drawables';
import { ECO_HEADING } from '../../../../res/strings';
import { moveToScreen } from '../../../functions';
const LandingECO = (props) => {

    const onNextPressed = () => {
        props.navigation.navigate('EcoNew1')
    }

    return (
        <ImageBackground style={{
            flex: 1,
            justifyContent: 'space-between'
        }} source={BACKGROUND_ONE_IMG}>
            <View>
                <BackButton
                    onPress={() => props.navigation.goBack()}
                />

                <Heading >{ECO_HEADING}</Heading>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 20
            }}>
                <Text>Add a New Record</Text>
                <RoundButton
                    onPress={() => onNextPressed()}
                />
            </View>
        </ImageBackground>

    )
}
const styles = {
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 5
    }, innerContainer: {
        flex: 1,
        padding: 20
    }
    , text: {
        marginTop: 30,
        marginLeft: 20
    }
}
export default LandingECO;