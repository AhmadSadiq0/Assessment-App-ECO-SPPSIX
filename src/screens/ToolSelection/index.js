import React,{useContext} from 'react';
import { ImageBackground, View, KeyboardAvoidingView } from 'react-native';
import { BACKGROUND_ONE_IMG } from '../../../res/drawables';
import { EC_SPPSIX, ECO_TOOL } from '../../../res/strings';
import { GridButton, Text, BackButton } from '../../components';
import { _storeBaseUrl } from '../../localStorage';
import { moveToScreen } from '../../functions';
import { Context as AuthContext } from '../../store/context/AuthContext';

const ToolSelectionScreen = (props) => {
    const { type } = props.route.params;
    const { navigation } = props;
    const { clearAuth } = useContext(AuthContext);

    const onEcoPressed = () => {
        clearAuth()
        _storeBaseUrl(ECO_TOOL)
        type == 'Login' ? moveToScreen(navigation, 'Login', { tool: 'ECO' }) : moveToScreen(navigation, 'Signup', { tool: 'ECO' })
    }
    const onSppsixPressed = () => {
        clearAuth()
        _storeBaseUrl(EC_SPPSIX)
        type == 'Login' ? moveToScreen(navigation, 'Login', { tool: 'SPSIX' }) : moveToScreen(navigation, 'Signup', { tool: 'SPSIX' })
    }
    return (
        <ImageBackground
            style={styles.container}
            source={BACKGROUND_ONE_IMG}
        >
            <BackButton
                onPress={() => props.navigation.goBack()}
            />
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
        padding: 5
    }, innerContainer: {
        margin: 20,
        marginTop: 130
    }
}
export default ToolSelectionScreen;
