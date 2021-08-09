import React,{useContext} from 'react';
import { ImageBackground, View, KeyboardAvoidingView } from 'react-native';
import { BACKGROUND_ONE_IMG } from '../../../res/drawables';
import { EC_SPPSIX, ECO_TOOL } from '../../../res/strings';
import { GridButton, Text, BackButton, Cover } from '../../components';
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
        <View
            style={styles.container}
        >
            <Cover
                navigation={props.navigation}
            />
        
            <View style={styles.innerContainer}>
                <Text style={{ fontWeight: '300', marginBottom: 10 }} >Select the tool you would like to use:</Text>
                <View>
                    <GridButton
                        text={'Preschool Environments Decision Tree for Coding'}
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
        </View>
    )
}
const styles = {
    container: {
        flex: 1,
    }, innerContainer: {
        padding:5
    }
}
export default ToolSelectionScreen;
