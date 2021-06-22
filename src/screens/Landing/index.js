import React from 'react';
import { View, ImageBackground, Image, StyleSheet } from 'react-native';
import { STYLE_CONTAINER } from '../../../res/styles';
import { BACKGROUND_IMG, EARLY_CHOICE_LOGO } from '../../../res/drawables';
import { PrimaryButton, SecondaryButton } from '../../components';

const LandingScreen = (props) => {
    const onLoginPressed = () => {
        props.navigation.navigate('ToolSelection',{type:'Login'})
    }
    const onSignupPressed = () => {
        props.navigation.navigate('ToolSelection',{type:'Signup'})

    }
    return (
        <ImageBackground style={{ ...STYLE_CONTAINER, justifyContent: 'space-between' }} source={BACKGROUND_IMG}>
            <Image style={styles.icon}
                resizeMode={"contain"}
                source={EARLY_CHOICE_LOGO}
            />
            <View>
                <View style={styles.row}>
                    <PrimaryButton
                        onPress={() => onLoginPressed()}
                        title={"Login"}
                    />
                </View>
                <View style={{ margin: 10, ...styles.row }}>
                    <SecondaryButton
                        onPress={() => onSignupPressed()}
                        title={"Sign Up"}
                    />
                </View>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    icon: {
        width: '90%',
        height: '30%',
        alignSelf: 'center'
    }, row: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

export default LandingScreen;