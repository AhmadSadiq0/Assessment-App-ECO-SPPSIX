import React, { useState, useRef } from 'react';
import { ImageBackground, View, Dimensions } from 'react-native';
import { Button, Text, RoundButton, Cover, ButtonRadio } from '../../../../../components'
import { BACKGROUND_ONE_IMG, BLUE_COLOUR, WHITE_COLOUR } from '../../../../../../res/drawables';
import { ECO_HEADING_NEW } from '../../../../../../res/strings';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

const ECO4 = (props) => {
    const {data} = props.route.params;
    console.log(data)

    const [Parent_ID, setParent_ID] = useState(null);
    console.log(data)


    const onNextPressed = () => {
        props.navigation.navigate('EcoNew5', {
            data: {
                ...data,
                Parent_ID
            }
        })
    }

    const scrollViewRef = useRef();

    return (
        <View style={{
            flex: 1,
        }} >
            <Cover
                navigation={props.navigation}
                heading={ECO_HEADING_NEW}
            />
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
                    title={'Parent did not participate in ratings process.'}
                    value={Parent_ID}
                    condition={3}
                    onPress={() => setParent_ID(3)}
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
    }, title: {
        alignSelf: 'center',
        marginTop: 20
    }
}
export default ECO4;