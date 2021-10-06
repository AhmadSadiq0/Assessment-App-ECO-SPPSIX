import React, { useState, useRef } from 'react';
import { ImageBackground, View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Input, Text, RoundButton, BackButton, Cover } from '../../components';
import { EMAIL_IMG, PERSON_IMG, BACKGROUND_ONE_IMG, PASSWORD_IMG } from '../../../res/drawables';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { sigupRequest } from '../../services/LoginServices';
import { moveToScreen } from '../../functions';
const SignUpScreen = (props) => {
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [username, setUsername] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [phoneNumber, setPhoneNumber] = useState(null)
    const scrollViewRef = useRef();
    const { tool } = props.route.params;

    const onSignupPressed = async () => {
        if (firstName && lastName && username && email && password && confirmPassword) {
            if (password == confirmPassword) {
                let res = await sigupRequest({
                    FirstName: firstName,
                    LastName: lastName,
                    UserName: username,
                    Email: email,
                    Password: password,
                    ConfirmPassword: confirmPassword,
                    PhoneNo: phoneNumber
                })
                props.navigation.popToTop() ;
                if (res.success) {
                    alert(res.data + '. Enter Username and Password to login')
                    tool == "SPSIX" ? moveToScreen(props.navigation, 'Login', { tool: 'SPSIX' }) : moveToScreen(props.navigation, 'Login', { tool: 'ECO' })
                } else {
                    alert(res.data)
                }
            } else {
                alert('Password does not match')
            }
        } else {
            alert('Kindly fill data in all fields!')
        }
    }
    return (
        <View style={styles.container}>
            <Cover
                navigation={props.navigation}
                heading={'Sign up'}
            />
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
                    icon={PERSON_IMG}
                    placeholder={'User Name'}
                    value={username}
                    onChangeText={text => setUsername(text)}
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
                {/* <Input
                    icon={PASSWORD_IMG}
                    placeholder={'Your Phone#'}
                    value={phoneNumber}
                    onChangeText={text => setPhoneNumber(text)}
                /> */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    margin: 20
                }}>
                    <Text>Sign Up</Text>
                    <RoundButton
                        onPress={() => onSignupPressed()}
                    />
                </View>
            </KeyboardAwareScrollView>
        </View>

    )
}
const styles = {
    container: {
        flex: 1,
    }, text: {
        marginTop: 30,
        marginLeft: 20
    }
}
export default SignUpScreen;