import React, { useState, useContext, useEffect } from 'react';
import { ImageBackground, View, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { Input, Text, RoundButton, BackButton, Cover, Error, ClickableText } from '../../components';
import { EMAIL_IMG, BLUE_COLOUR, BACKGROUND_ONE_IMG, PASSWORD_IMG } from '../../../res/drawables';
import { ECO, SPSIX } from '../../../res/strings';
import { forgetPasswordRequest } from '../../services/LoginServices';
const ForgetPassword = (props) => {
    const [username, setUsername] = useState(null)
    const [loading, setLoading] = useState(null)
    const { tool } = props.route.params;

    const onForgetPasswordPressed = async () => {
        setLoading(true)
        let res = await forgetPasswordRequest(username)
        if (res.data == "Pwd Send on your Email") {
            alert('Password has been sent to the email attached with username')
        } else {
            alert('Something went wrong, make sure you have entered correct username!')
        }
        setLoading(false)
    }
    return (
        <View style={styles.container}
            source={BACKGROUND_ONE_IMG}>
            <Cover
                heading={'Forgot Password'}
                navigation={props.navigation}

            />
            <View>
                <Text style={styles.text}>Welcome Back!</Text>
                <Input
                    icon={EMAIL_IMG}
                    placeholder={'Enter Username'}
                    value={username}
                    onChangeText={text => setUsername(text)}
                />
                <ActivityIndicator animating={true} style={{ opacity: loading ? 1.0 : 0.0, margin: 5 }} color={BLUE_COLOUR} />
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                margin: 20
            }}>
                {/* <Text>Log In</Text> */}
                <RoundButton
                    onPress={() => onForgetPasswordPressed()}
                />
            </View>
        </View>

    )
}
const styles = {
    container: {
        flex: 1,
    }, text: {
        marginLeft: 20
    }, forgetPassword: { alignSelf: 'flex-end', margin: 5 }
}
export default ForgetPassword;