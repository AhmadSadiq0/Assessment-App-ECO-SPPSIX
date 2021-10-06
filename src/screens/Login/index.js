import React, { useState, useContext, useEffect } from 'react';
import { ImageBackground, View, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { Input, Text, RoundButton, BackButton, Cover, Error, ClickableText } from '../../components';
import { EMAIL_IMG, BLUE_COLOUR, BACKGROUND_ONE_IMG, PASSWORD_IMG } from '../../../res/drawables';
import { Context as AuthContext } from '../../store/context/AuthContext';
import { ECO, SPSIX } from '../../../res/strings';
const LoginScreen = (props) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const { state: auth, signIn } = useContext(AuthContext);
    const { user, error, tool, loading } = auth;
    console.log(auth)
    useEffect(() => {
        // if (props.route.params.tool == SPSIX && user)
        //     props.navigation.navigate('SppsixLanding')
        // else if (props.route.params.tool == ECO && user)
        //     props.navigation.navigate('EcoLanding')
        // else
         if(props.route.params.tool==SPSIX &&auth.tool==SPSIX && auth.user){
            props.navigation.pop()
            props.navigation.navigate('SppsixLanding')

        }else if(props.route.params.tool==ECO &&auth.tool==ECO && auth.user){
            props.navigation.pop()
            props.navigation.navigate('EcoLanding')
        }
    }, [user])


    const onLoginPressed = async () => {
        if (email && password) {
            await signIn(email, password, props.route.params.tool);
        }
    }
    const onForgetPasswordPressed = () => {
        props.navigation.navigate('ForgetPassword',{tool:props.route.params.tool})

    }
    return (
        <View style={styles.container}
            source={BACKGROUND_ONE_IMG}>
            <Cover
                heading={'Login'}
                navigation={props.navigation}

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
                <ClickableText
                    onPress={() => onForgetPasswordPressed()}
                    style={styles.forgetPassword}
                    text={'Forgot Password'}
                />
                <ActivityIndicator animating={true} style={{ opacity: loading ? 1.0 : 0.0, margin: 5 }} color={BLUE_COLOUR} />
                {error ? <Error>{error}</Error> : null}

            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                margin: 20
            }}>
                {/* <Text>Log In</Text> */}
                <RoundButton
                    onPress={() => onLoginPressed()}
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
export default LoginScreen;