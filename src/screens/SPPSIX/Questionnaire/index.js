import React, { useState, useRef } from 'react';
import { ImageBackground, View, KeyboardAvoidingView } from 'react-native';
import { BackButton, Heading, Text, RoundButton, OptionsText, PrimaryButton } from '../../../components';
import { BACKGROUND_ONE_IMG, } from '../../../../res/drawables';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

const Questionnaire = (props) => {
    const scrollViewRef = useRef();

    //Case 1
    const [earlyChildhoodPrg, setEarlyChildhoodPrg] = useState(null)
    const [atleast10hoursPerWeek, setAtleast10hoursPerWeek] = useState(null)
    const [lessthan10hoursPerWeek, setLessthan10hoursPerWeek] = useState(null)
    const [regularChildhoodProgram, setRegularChildhoodProgram] = useState(null)
    const [inOtherLocation, setInOtherLocation] = useState(null)
    //Case 2
    const [specialEducationProgram, setSpecialEducationProgram] = useState(null)
    const [separateClass, setSeparateClass] = useState(null)
    const [separateSchool, setSeparateSchool] = useState(null)
    const [resdentialFacility, setResedentialFacility] = useState(null)
    const [homeEducation, setHomeEduaction] = useState(null)

    //case 1 response
    const onEaryChildhoodProgramResponse = (btnNum) => {
        if (btnNum == 1) {
            setEarlyChildhoodPrg(true)

            setSpecialEducationProgram(null)
            setSeparateClass(null)
            setSeparateSchool(null)
            setResedentialFacility(null)
        }
        else {
            setEarlyChildhoodPrg(false)

            setAtleast10hoursPerWeek(null)
            setLessthan10hoursPerWeek(null)
            setRegularChildhoodProgram(null)
            setInOtherLocation(null)
        }
    }
    const onHoursPerWeekResponse = (btnNum) => {
        btnNum == 1 ? setAtleast10hoursPerWeek(true) : setAtleast10hoursPerWeek(false)
        btnNum == 2 ? setLessthan10hoursPerWeek(true) : setLessthan10hoursPerWeek(true)
    }
    const onMajorityHoursEducationAndServicesResponse = (btnNum) => {
        btnNum == 1 ? setRegularChildhoodProgram(true) : setRegularChildhoodProgram(false)
        btnNum == 2 ? setInOtherLocation(true) : setInOtherLocation(false)
    }
    //case 2 response
    const onSpecialEduactionProgramResponse = (btnNum) => {
        if (btnNum == 1)
            setSpecialEducationProgram(true)
        else {
            setSpecialEducationProgram(false)
        }
    }
    const onSpecialEducationIn = (btnNum) => {
        btnNum == 1 ? setSeparateClass(true) : setSeparateClass(false)
        btnNum == 2 ? setSeparateSchool(true) : setSeparateSchool(false)
        btnNum == 3 ? setResedentialFacility(true) : setResedentialFacility(false)
    }
    const onHomeEducationResponse = (btnNum) => {
        btnNum == 1 ? setHomeEduaction(true) : setHomeEduaction(false)
    }

    const onGetCodePressed = () => {
        if (earlyChildhoodPrg && atleast10hoursPerWeek) {
            if (regularChildhoodProgram)
                alert(30)
            else if (inOtherLocation)
                alert(31)
        } else if (earlyChildhoodPrg && lessthan10hoursPerWeek) {
            if (regularChildhoodProgram)
                alert(32)
            else if (inOtherLocation)
                alert(33)
        }else{
            if(specialEducationProgram && separateClass){
                alert(23)
            }else if(specialEducationProgram && separateSchool){
                alert(24)
            }else if(specialEducationProgram && resdentialFacility){
                alert(25)
            } if(!specialEducationProgram && homeEducation){
                alert(26)
            }else if(!specialEducationProgram && !homeEducation){
                alert(27)
            }
        }
    }
    return (
        <ImageBackground style={styles.container}
            source={BACKGROUND_ONE_IMG}>
            <BackButton
                onPress={() => props.navigation.goBack()}
            />
            <KeyboardAwareScrollView
                contentContainerStyle={styles.innerContainer}
                ref={scrollViewRef}
            >
                <Heading style={{ height: 80, marginBottom: 10 }}>{'EE SPP 6 \n Decision Tree'}</Heading>
                <OptionsText
                    text={'Does the child attend regular early childhood program?'}
                    title1={"Yes"}
                    title2={"No"}
                    onPress={(btnNum) => onEaryChildhoodProgramResponse(btnNum)}
                />
                {earlyChildhoodPrg ? <OptionsText
                    title1={"Atleast 10 hours \n per week"}
                    title2={"Less than 10 \n hours per week"}
                    onPress={(btnNum) => onHoursPerWeekResponse(btnNum)}
                /> : null}

                {(atleast10hoursPerWeek || lessthan10hoursPerWeek) && earlyChildhoodPrg ? <OptionsText
                    text={'Where does the child receive the majority of hours of special education and related services?'}
                    title1={"In the regular early \n childhood program"}
                    title2={"In someother \n location"}
                    onPress={(btnNum) => onMajorityHoursEducationAndServicesResponse(btnNum)}
                /> : null}
                {earlyChildhoodPrg==false ?
                    <OptionsText
                        text={'Is the child attending special education program'}
                        title1={"Yes"}
                        title2={"No"}
                        onPress={(btnNum) => onSpecialEduactionProgramResponse(btnNum)}
                    /> : null}
                {specialEducationProgram ?
                    <OptionsText
                        title1={"Separate\nClass"}
                        title2={"Separate\nSchool"}
                        title3={"Residential\nfacility"}
                        thirdButton={true}
                        onPress={(btnNum) => onSpecialEducationIn(btnNum)}
                    /> : null}
                {specialEducationProgram==false  ? 
                <OptionsText
                    text={'Is the child receiving the majority of special education and related services in the residence of the child’s family or care giver?'}
                    title1={"Yes"}
                    title2={"No"}
                    onPress={(btnNum) => onHomeEducationResponse(btnNum)}
                /> : null}

            </KeyboardAwareScrollView>

            <PrimaryButton
                style={{ alignSelf: 'center' }}
                title={'Get code'}
                onPress={() => onGetCodePressed()}
            />

        </ImageBackground>

    )
}
const styles = {
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 5
    }, innerContainer: {
        flex: 1, marginTop: 100, padding: 20
    }, text: {
        marginLeft: 20
    }
}
export default Questionnaire;