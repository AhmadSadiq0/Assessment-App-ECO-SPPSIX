import React, { useState, useRef } from 'react';
import { ImageBackground, View, KeyboardAvoidingView } from 'react-native';
import { Input, Text, RoundButton, BackButton,Heading } from '../../components';
import { EMAIL_IMG, BLUE_COLOUR, BACKGROUND_ONE_IMG, PASSWORD_IMG } from '../../../res/drawables';
import { loginRequest } from '../../services/LoginServices';
const LoginScreen = (props) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const onLoginPressed = async () => {
        if (email && password) {
            let res = await loginRequest(email, password);
            if (res.success)
                props.navigation.navigate('SppsixLanding')
            else
                alert('Incorrect username/password')
        } else {
            alert('Kindly enter username and password')
        }
    }
    return (
        <ImageBackground style={styles.container} 
            source={BACKGROUND_ONE_IMG}>
            <BackButton
                onPress={() => props.navigation.goBack()}
            />
            <View>
                <Text style={styles.text}>Welcome Back!</Text>
                <Input
                    icon={EMAIL_IMG}
                    placeholder={'Your Username'}
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <Input
                    icon={PASSWORD_IMG}
                    placeholder={'Your Password'}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 20
            }}>
                <Text>Log In</Text>
                <RoundButton
                    onPress={() => onLoginPressed()}
                />
            </View>
        </ImageBackground>

    )
}
const styles = {
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding:5
    }, text: {
        marginLeft: 20
    }
}
export default LoginScreen;