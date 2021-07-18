import React, { useState, useRef } from 'react';
import { ImageBackground, View, Dimensions } from 'react-native';
import { Button, Text, RoundButton, BackButton, Heading, ButtonRadio } from '../../../../components';
import { BACKGROUND_ONE_IMG, BLUE_COLOUR, WHITE_COLOUR } from '../../../../../res/drawables';
import { ECO_HEADING } from '../../../../../res/strings';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

const ECO4 = (props) => {
    const data = props.route.params;
    console.log(data)

    const [Parent_ID, setParent_ID] = useState(null);


    const onNextPressed = () => {
        props.navigation.navigate('EcoNew5',{
            ...data, 
            Parent_ID
        })
    }

    const scrollViewRef = useRef();

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
            <KeyboardAwareScrollView
                contentContainerStyle={styles.innerContainer}
                ref={scrollViewRef}
            >
            <Text style={styles.title}>IV. How was Parent Involved in the Ratings?</Text>
                <ButtonRadio
                    title={'Parent participated in meeting.'}
                    value={Parent_ID}
                    condition={1}
                    onPress={() => setParent_ID(1)}
                />
                <ButtonRadio
                    title={'Parent did not attend, but provided information.'}
                    value={Parent_ID}
                    condition={2}
                    onPress={() => setParent_ID(2)}
                />
                <ButtonRadio
                    title={'Parent Did Not Participate in Ratings Process'}
                    value={Parent_ID}
                    condition={3}
                    onPress={() =>setParent_ID(3)}
                />
                 
            </KeyboardAwareScrollView>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 20
            }}>
                <Text>Next</Text>
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
        padding: 20
    }
    , text: {
        marginTop: 30,
        marginLeft: 20
    }, title: {
        alignSelf: 'center',
        marginTop: 20
    }
}
export default ECO4;