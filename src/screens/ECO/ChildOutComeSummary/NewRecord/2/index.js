import React, { useState, useRef } from 'react';
import { ImageBackground, View, Dimensions } from 'react-native';
import { Button, Text, RoundButton, Cover, Heading, InputDate } from '../../../../../components';
import { BACKGROUND_ONE_IMG, BLUE_COLOUR, WHITE_COLOUR } from '../../../../../../res/drawables';
import { ECO_HEADING_NEW, ROLE_LISTINGS } from '../../../../../../res/strings';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

const ECO2 = (props) => {
    const {data} = props.route.params;
    console.log(data)
    const [FamilyCaretaker, setFamilyCaretaker] = useState(0);
    const [CoordinatorLea, setCoordinatorLea] = useState(0);
    const [ChildhoodTeacherSpcl, setChildhoodTeacherSpcl] = useState(0);
    const [Psycologist, setPsycologist] = useState(0);
    const [Pathologist, setPathologist] = useState(0);
    const [ServiceProvider, setServiceProvider] = useState(0);
    const getSelected = () => {
        let slectedParticipants = [];
        if (FamilyCaretaker)
            slectedParticipants.push(ROLE_LISTINGS[0])
        if (CoordinatorLea)
            slectedParticipants.push(ROLE_LISTINGS[1])
        if (ChildhoodTeacherSpcl)
            slectedParticipants.push(ROLE_LISTINGS[2])
        if (Psycologist)
            slectedParticipants.push(ROLE_LISTINGS[3])
        if (Pathologist)
            slectedParticipants.push(ROLE_LISTINGS[4])
        if (ServiceProvider)
            slectedParticipants.push(ROLE_LISTINGS[5])

        return slectedParticipants;
    }
    const onNextPressed = () => {
        if (getSelected().length >= 2) {
            props.navigation.navigate('EcoNew3', {
                data:{
                ...data,
                FamilyCaretaker,
                CoordinatorLea,
                ChildhoodTeacherSpcl,
                Psycologist,
                Pathologist,
                ServiceProvider,
                selectedParticipantsTypes: getSelected()
            }})
        } else {
            alert('Select atleast 2 participants')
        }
    }

    const scrollViewRef = useRef();

    return (
        <View style={{
            flex: 1,
        }} source={BACKGROUND_ONE_IMG}>
            <Cover
                navigation={props.navigation}
                heading={ECO_HEADING_NEW}
            />
            <KeyboardAwareScrollView
                contentContainerStyle={styles.innerContainer}
                ref={scrollViewRef}
            >
                <Text style={styles.title}>II. Indicate who participated in the ratings</Text>
                <Button
                    title={'Family/Caretaker'}
                    value={FamilyCaretaker}
                    onPress={() => FamilyCaretaker == 0 ? setFamilyCaretaker(1) : setFamilyCaretaker(0)}
                />
                <Button
                    title={'Coordinator, LEA Representative or Administrator'}
                    value={CoordinatorLea}
                    onPress={() => CoordinatorLea == 0 ? setCoordinatorLea(1) : setCoordinatorLea(0)}
                />
                <Button
                    title={'Early Childhood Teacher'}
                    value={ChildhoodTeacherSpcl}
                    onPress={() => ChildhoodTeacherSpcl == 0 ? setChildhoodTeacherSpcl(1) : setChildhoodTeacherSpcl(0)}
                />
                <Button
                    title={'Psychologist or Social Worker'}
                    value={Psycologist}
                    onPress={() => Psycologist == 0 ? setPsycologist(1) : setPsycologist(0)}
                />
                <Button
                    title={'Speech/ Language Pathologist'}
                    value={Pathologist}
                    onPress={() => Pathologist == 0 ? setPathologist(1) : setPathologist(0)}
                />
                <Button
                    title={'Another Related Service Provider(e.g. OT/PT)'}
                    value={ServiceProvider}
                    onPress={() => ServiceProvider == 0 ? setServiceProvider(1) : setServiceProvider(0)}
                />
            </KeyboardAwareScrollView>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 20
            }}>
                <Text>Next</Text>
                <RoundButton
                    onPress={() => onNextPressed()}
                />
            </View>
        </View>

    )

}
const styles = {
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 5
    }, innerContainer: {
        padding: 20
    }
    , text: {
        marginTop: 30,
        marginLeft: 20
    }, title: {
        alignSelf: 'center',
        marginTop: 20
    }
}
export default ECO2;