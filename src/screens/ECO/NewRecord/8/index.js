import React, { useState, useRef, useContext } from 'react';
import { ImageBackground, View, Dimensions, Button } from 'react-native';
import { Input, Text, RoundButton, BackButton, Heading, InputDate } from '../../../../components';
import { BACKGROUND_ONE_IMG, BLUE_COLOUR, WHITE_COLOUR } from '../../../../../res/drawables';
import { ROLE_LISTINGS_SUMMARY, ECO_HEADING } from '../../../../../res/strings';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { Context as AuthContext } from '../../../../store/context/AuthContext';

const ECO3 = (props) => {
    const { state: auth } = useContext(AuthContext);
    const { user } = auth;
    const [username, setUsername] = useState(user.Name)
    const [date,setData] = useState(null)

    console.log(user)

    const scrollViewRef = useRef();
    const bdateRef = useRef();
    const { data } = props.route.params;
    console.log(props)


    const onNextPressed = () => {

    }
    const onSubmitPressed = () => {
        alert('Submitted')
    }
    const handleDob = (text, ref) => {
        setData(text)
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
            <KeyboardAwareScrollView
                contentContainerStyle={styles.innerContainer}
                ref={scrollViewRef}
            >
                <Text style={styles.title}>VIII. Entered into ECO App By</Text>

                <Input
                    editable={false}
                    placeholder={'Username'}
                    value={username}
                    onChangeText={text => setUsername(text)}
                />
               
                <InputDate
                    ref={bdateRef}
                    placeholder={'Date  DD/MM/YYYY*'}
                    value={date}
                    onChangeText={(text, ref) => handleDob(text, ref)}
                />

                <Button
                    title={'Submit'}
                    onPress={() => onSubmitPressed()}
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
export default ECO3;