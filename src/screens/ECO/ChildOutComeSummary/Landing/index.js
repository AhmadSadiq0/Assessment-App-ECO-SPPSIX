import React, { useState, useContext, useEffect } from 'react';
import { Text as SimpleText, View, Image, Modal, Platform, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Text, Cover, GridButton } from '../../../../components';
import { ECO_HEADING, ECO_TEXT } from '../../../../../res/strings';
import { Context as AuthContext } from '../../../../store/context/AuthContext';
import {  LIGHT_BLUE_COLOUR } from '../../../../../res/drawables';
const LandingCOC = (props) => {
    const { state: auth } = useContext(AuthContext);
    const { user } = auth;

    const onEntryRating = () => {
        props.navigation.navigate('EcoNew1')
    }
    const onProgressRating = () => {
        alert('Module under development!')
    }
    return (
        <View style={styles.container}>
            <Cover
                navigation={props.navigation}
                heading={ECO_HEADING}
            />
            <View style={{ padding: 5 }}>

                <Text>{`Welcome ${user.Name}`}</Text>
                <Text style={{ fontWeight: '300', marginBottom: 10 }} >Select the tool you would like to use:</Text>

                <View style={styles.innerContainer}>
                    <GridButton
                        text={'Entry Rating'}
                        onPress={() => onEntryRating()}
                    />
                    <GridButton
                        style={{ alignSelf: 'flex-end' }}
                        text={'Progress Rating'}
                        onPress={() => onProgressRating()}
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
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'space-between'
    },
    modalInnerContainer: {
        height: '70%',
        margin: 10,
        borderRadius: 20,
        backgroundColor: LIGHT_BLUE_COLOUR
    }
}
export default LandingCOC;