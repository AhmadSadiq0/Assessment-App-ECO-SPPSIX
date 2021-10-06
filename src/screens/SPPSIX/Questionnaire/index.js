import React, { useState, useRef, useContext } from 'react';
import { ImageBackground, View, ActivityIndicator } from 'react-native';
import { BackButton, Cover, Text, RoundButton, OptionsText, PrimaryButton } from '../../../components';
import { BACKGROUND_ONE_IMG, WHITE_COLOUR, BLUE_COLOUR } from '../../../../res/drawables';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { CHILDHOOD_PROGRAMS, SPPS_SIX_HEADING, SPPSIX_TEXT } from '../../../../res/strings';
import DropDownPicker from 'react-native-dropdown-picker';
import { CURRENT_DATE } from '../../../functions';
import { Context as AuthContext } from '../../../store/context/AuthContext';
import { createRecord } from '../../../services/SppsixServices';
import MessageModal from '../../../Modal/EcoMessage';

const Questionnaire = (props) => {
    const scrollViewRef = useRef();
    const { state: auth } = useContext(AuthContext);
    const { user } = auth;
    const { data } = props.route.params;
    console.log(data, props)
    const [modalVisible, setModalVisible] = useState(false)

    const [loading, setLoading] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const [ChildhoodProgram, setChildhoodProgram] = useState(null)
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

    const onSubmitPressed = async () => {
        if (!isSubmitted) {
            if (getRating()) {
                let payload = {
                    ...data,
                    ChildhoodProgram,
                    Rating: getRating(),
                    "Date": CURRENT_DATE(),
                    UserId: user.UserID
                };
                setLoading(true)
                let res = await createRecord(payload)
                if (res.success) {
                    setIsSubmitted(true)
                    alert('Thank you! Your code has been successfully recorded')
                }
                else
                    alert('Could not enter record to database, please try again!')
                setLoading(false)
            } else {
                alert('Code not generated, please add data')
            }
        } else {
            props.navigation.goBack();
            props.navigation.goBack();
            props.navigation.goBack();
        }
    }
    const getRating = () => {
        if (earlyChildhoodPrg && atleast10hoursPerWeek) {
            if (regularChildhoodProgram)
                return 30
            else if (inOtherLocation)
                return 31
        } else if (earlyChildhoodPrg && lessthan10hoursPerWeek) {
            if (regularChildhoodProgram)
                return 32
            else if (inOtherLocation)
                return 33
        } else {
            if (specialEducationProgram && separateClass) {
                return 23
            } else if (specialEducationProgram && separateSchool) {
                return 24
            } else if (specialEducationProgram && resdentialFacility) {
                return 25
            } if (specialEducationProgram == false && homeEducation) {
                return 26
            } else if (specialEducationProgram == false && homeEducation == false) {
                return 27 + ' Service Provider Location'
            }
        }
        return null
    }
    const [open, setOpen] = useState(false);

    return (
        <View style={styles.container}
            source={BACKGROUND_ONE_IMG}>
            <Cover
                navigation={props.navigation}
                heading={SPPS_SIX_HEADING}
            />
            <KeyboardAwareScrollView
                contentContainerStyle={styles.innerContainer}
                ref={scrollViewRef}
            >
                <OptionsText
                    showExclamation={true}
                    text={'Is the child enrolled in a regular early childhood program?'}
                    title1={"Yes"}
                    title2={"No"}
                    onPress={(btnNum) => onEaryChildhoodProgramResponse(btnNum)}
                    onExclamationPressed={() => setModalVisible(true)}
                />
                {earlyChildhoodPrg ? <DropDownPicker
                    open={open}
                    value={ChildhoodProgram}
                    items={CHILDHOOD_PROGRAMS}
                    setOpen={setOpen}
                    setValue={setChildhoodProgram}
                    placeholder="Type Of Early Childhood"
                    textStyle={{ color: WHITE_COLOUR }}
                    style={{ backgroundColor: BLUE_COLOUR }}
                    dropDownContainerStyle={{ backgroundColor: BLUE_COLOUR }}
                /> : null}
                {earlyChildhoodPrg ? <OptionsText
                    title1={"At least \n 10 hours \n per week"}
                    title2={"Less than\n 10 hours\n per week"}
                    onPress={(btnNum) => onHoursPerWeekResponse(btnNum)}
                /> : null}


                {(atleast10hoursPerWeek || lessthan10hoursPerWeek) && earlyChildhoodPrg ? <OptionsText
                    text={'Where does the child receive the majority of hours of special education and related services?'}
                    title1={"In the \nregular early \n childhood program"}
                    title2={"In some other \n location"}
                    onPress={(btnNum) => onMajorityHoursEducationAndServicesResponse(btnNum)}
                /> : null}
                {earlyChildhoodPrg == false ?
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
                {specialEducationProgram == false ?
                    <OptionsText
                        text={'Is the child receiving the majority of special education and related services in the residence of the child’s family or care giver?'}
                        title1={"Yes"}
                        title2={"No"}
                        onPress={(btnNum) => onHomeEducationResponse(btnNum)}
                    /> : null}

            </KeyboardAwareScrollView>
            {getRating() ? <Text style={{ margin: 5 }}>{`EE Code = ${getRating()}`}</Text> : null}
            <ActivityIndicator animating={true} style={{ opacity: loading ? 1.0 : 0.0, margin: 5 }} color={BLUE_COLOUR} />
            <PrimaryButton
                style={{ alignSelf: 'center' }}
                title={!isSubmitted ? 'Submit' : 'Go to home'}
                onPress={() => onSubmitPressed()}
            />
            <MessageModal
                modalVisible={modalVisible}
                text={SPPSIX_TEXT}
                onClosePressed={() => setModalVisible(false)}
            />
        </View>

    )
}
const styles = {
    container: {
        flex: 1
    }, innerContainer: {
        flex: 1, padding: 20
    }, text: {
        marginLeft: 20
    }
}
export default Questionnaire;