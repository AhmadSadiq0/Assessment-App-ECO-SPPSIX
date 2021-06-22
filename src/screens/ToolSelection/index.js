import React from 'react';
import { ImageBackground, View, KeyboardAvoidingView } from 'react-native';
import { BACKGROUND_ONE_IMG } from '../../../res/drawables';
import { EC_SPPSIX, ECO_TOOL } from '../../../res/strings';
import { GridButton, Text } from '../../components';
import { _storeBaseUrl } from '../../localStorage';
import { moveToScreen } from '../../functions';
const ToolSelectionScreen = (props) => {
    const { type } = props.route.params;
    const { navigation } = props;

    const onEcoPressed = () => {
        _storeBaseUrl(ECO_TOOL)
        type == 'Login' ? moveToScreen(navigation, 'Login') : moveToScreen(navigation, 'Signup')
    }
    const onSppsixPressed = () => {
        _storeBaseUrl(EC_SPPSIX)
        type == 'Login' ? moveToScreen(navigation, 'Login') : moveToScreen(navigation, 'Signup')
    }
    return (
        <ImageBackground
            style={styles.container}
            source={BACKGROUND_ONE_IMG}
        >
            <View style={styles.innerContainer}>
                <Text style={{ fontWeight: '300', marginBottom: 10 }} >Select the tool you would like to use:</Text>
                <View>
                    <GridButton
                        text={'EE SPP 6 Preschool Environments Decision Tree for Coding'}
                        onPress={() => onSppsixPressed()}
                    />
                    <GridButton
                        style={{ alignSelf: 'flex-end' }}
                        text={'Early Childhood Outcomes Ratings Decision Tree'}
                        onPress={() => onEcoPressed()}
                    />
                </View>

            </View>
            <View></View>
        </ImageBackground>
    )
}
const styles = {
    container: {
        flex: 1,
    }, innerContainer: {
        margin: 20,
        marginTop: 180
    }
}
export default ToolSelectionScreen;
