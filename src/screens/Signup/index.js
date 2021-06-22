import React, { useState, useRef } from 'react';
import { ImageBackground, View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Input, Text, RoundButton } from '../../components';
import { EMAIL_IMG, PERSON_IMG, BACKGROUND_ONE_IMG, PASSWORD_IMG } from '../../../res/drawables';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

const SignUpScreen = (props) => {
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [phoneNumber, setPhoneNumber] = useState(null)

    const scrollViewRef = useRef();
    return (
        <ImageBackground style={styles.container} source={BACKGROUND_ONE_IMG}>
            <View style={{ height: '20%' }}></View>
            <KeyboardAwareScrollView
                ref={scrollViewRef}
                style={{ flex: 1 }}>
                <Text style={styles.text}>Let's get you started!</Text>
                <Input
                    icon={PERSON_IMG}
                    placeholder={'First Name'}
                    value={firstName}
                    onChangeText={text => setFirstName(text)}
                />
                <Input
                    icon={PERSON_IMG}
                    placeholder={'Last Name'}
                    value={lastName}
                    onChangeText={text => setLastName(text)}
                />
                <Input
                    icon={EMAIL_IMG}
                    placeholder={'Your email'}
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <Input
                    icon={PASSWORD_IMG}
                    placeholder={'Your password'}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                />
                <Input
                    icon={PASSWORD_IMG}
                    placeholder={'Confirm password'}
                    value={confirmPassword}
                    secureTextEntry={true}
                    onChangeText={text => setConfirmPassword(text)}
                />
                <Input
                    icon={PASSWORD_IMG}
                    placeholder={'Your Phone#'}
                    value={phoneNumber}
                    secureTextEntry={true}
                    onChangeText={text => setPhoneNumber(text)}
                />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    margin: 20
                }}>
                    <Text>Sign Up</Text>
                    <RoundButton
                        onPress={() => alert('pressed')}
                    />
                </View>
            </KeyboardAwareScrollView>
        </ImageBackground>

    )
}
const styles = {
    container: {
        flex: 1,
        justifyContent: 'space-between'
    }, text: {
        marginTop: 30,
        marginLeft: 20
    }
}
export default SignUpScreen;