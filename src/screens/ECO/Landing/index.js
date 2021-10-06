import React, { useState, useContext, useEffect } from 'react';
import { ImageBackground, View, Dimensions } from 'react-native';
import { Text, Cover, BackButton, Heading, InputDate, GridButton } from '../../../components';
import { BACKGROUND_ONE_IMG } from '../../../../res/drawables';
import { ECO_HEADING, TOOL_SELECTION_HEADING, ECO_TEXT } from '../../../../res/strings';
import { moveToScreen } from '../../../functions';
import { Context as AuthContext } from '../../../store/context/AuthContext';
import MessageModal from '../../../Modal/EcoMessage';

const LandingECO = (props) => {
    const { state: auth } = useContext(AuthContext);
    const { user } = auth;
    const [modalVisible, setModalVisible] = useState(false)

    const onNextPressed = () => {
        props.navigation.navigate('CocLanding')
    }
    const onEcoRatingsPressed = () => {
        props.navigation.navigate('EcoGenerateRatings1')

    }

    return (
        <View style={styles.container}>
            <Cover
                style={{ height: 80 }}
                showMessage={true}
                navigation={props.navigation}
                heading={ECO_HEADING}
                onShowMessagePressed={() => setModalVisible(true)}
            />
            <View style={{ padding: 5 }}>

                <Text>{`Welcome ${user.Name}`}</Text>
                <Text style={{ fontWeight: '300', marginBottom: 10 }} >{TOOL_SELECTION_HEADING}</Text>

                <View style={styles.innerContainer}>
                    <GridButton
                        text={'Complete Child Outcome Summary Form'}
                        onPress={() => onNextPressed()}
                    />
                    <GridButton
                        style={{ alignSelf: 'flex-end' }}
                        text={'Child Outcomes Rating Only'}
                        onPress={() => onEcoRatingsPressed()}
                    />
                </View>

            </View>
            {/* <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 20
            }}>
                <Text>Add a New Record</Text>
                <RoundButton
                    onPress={() => onNextPressed()}
                />
            </View> */}
            <MessageModal
                modalVisible={modalVisible}
                text={ECO_TEXT}
                onClosePressed={() => setModalVisible(false)}
            />
        </View>

    )
}
const styles = {
    container: {
        flex: 1,
    }, innerContainer: {
        flex: 1,
        padding: 20
    }
    , text: {
        marginTop: 30,
        marginLeft: 20
    }
}
export default LandingECO;