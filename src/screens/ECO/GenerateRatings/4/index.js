import React, { useState, useRef } from 'react';
import { ImageBackground, View, Dimensions, TouchableOpacity } from 'react-native';
import { NumberBox, Text, RoundButton, Cover, OptionsText } from '../../../../components';
import { ECO_HEADING_RATINGS } from '../../../../../res/strings';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

const GenerateRatings5 = (props) => {
    const { data } = props.route.params;
    const { Acquiranduse, PositiveSocial, TakeAppropriate } = data;
    const scrollViewRef = useRef();
    console.log(data)
    const onHomePressed = () => {
        props.navigation.goBack();
        props.navigation.goBack();
        props.navigation.goBack();
        props.navigation.goBack();
    }
    return (
        <View style={{
            flex: 1,
            justifyContent: 'space-between'
        }} >
            <Cover
                navigation={props.navigation}
                heading={ECO_HEADING_RATINGS}
            />
            <KeyboardAwareScrollView
                contentContainerStyle={styles.innerContainer}
                ref={scrollViewRef}
            >
                <Text style={styles.title}>IV. Ratings Generated</Text>

                <Text style={styles.text}>A. Positive Social Relationships</Text>
                <NumberBox
                    text={PositiveSocial}
                />
                <Text style={styles.text}>B. Acquire and Use Knowledge and Skills</Text>
                <NumberBox
                    text={Acquiranduse}
                />
                <Text style={styles.text}>C. Take Appropriate Actions To Meet Own Needs</Text>
                <NumberBox
                    text={TakeAppropriate}
                />

            </KeyboardAwareScrollView>
            <View style={styles.footer
            }>
                <TouchableOpacity onPress={() => onHomePressed()}>
                    <Text>Go to home</Text>
                </TouchableOpacity>
                {/* <RoundButton
                    onPress={() => onNextPressed()}
                /> */}
            </View>
        </View>

    )
}
const styles = {
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 5
    }, innerContainer: {
        padding: 20
    }
    , text: {
        marginTop: 30,
        marginLeft: 20
    }, text: {
        margin: 5
    }, title: {
        alignSelf: 'center',
        fontWeight: '700',
        fontSize: 12,
    }, footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    }
}
export default GenerateRatings5;