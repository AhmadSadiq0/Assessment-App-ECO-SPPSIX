import React, { useState, useRef } from 'react';
import { ImageBackground, View, Dimensions } from 'react-native';
import { InputBox, Text, RoundButton, Cover, OptionsText } from '../../../../../components';
import { BACKGROUND_ONE_IMG, BLUE_COLOUR, WHITE_COLOUR } from '../../../../../../res/drawables';
import { ECO_HEADING_NEW } from '../../../../../../res/strings';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

const ECO7 = (props) => {
    const {data} = props.route.params;
    console.log(data)

    const [Needs_Summary, setNeeds_Summary] = useState(null)
    const [Needs_Evidencedate, setNeeds_Evidencedate] = useState(null)
    const [Needs_Special, setNeeds_Special] = useState(null)

    const [ageExpected, setAgeExpected] = useState(null)
    const [ageExpectedAllSettings, setAgeExpectedAllSetting] = useState(null)
    const [whatExtent, setWhatExtent] = useState(null)
    const [outComeArea, setOutComeArea] = useState(null)
    const [immediateFoundationSkill, setImmediateFoundationSkill] = useState(null)
    const [whatExtentFoundationalSkill, setwhatExtentFoundationalSkill] = useState(null)

    //true means option 1 false means option 2
    const onAgeExpected = (btnNum) => {
        if (btnNum == 1) {
            setAgeExpected(true)
            setAgeExpectedAllSetting(null)
            setWhatExtent(null)
            setOutComeArea(null)
            setImmediateFoundationSkill(null)
        } else {
            setAgeExpected(false)
            setAgeExpectedAllSetting(null)
            setWhatExtent(null)
            setOutComeArea(null)
            setImmediateFoundationSkill(null)
        }
    }
    const onAgeExpectedAllSettings = (btnNum) => {
        btnNum == 1 ? setAgeExpectedAllSetting(true) : setAgeExpectedAllSetting(false)
    }
    const onOutcomeArea = (btnNum) => {
        btnNum == 1 ? setOutComeArea(true) : setOutComeArea(false)
    }
    const onWhatExtent = (btnNum) => {
        //true means option 1 false means option 2
        btnNum == 1 ? setWhatExtent(true) : setWhatExtent(false)

    }
    const onImmediateFoundationalSkill = (btnNum) => {
        btnNum == 1 ? setImmediateFoundationSkill(true) : setImmediateFoundationSkill(false)

    }
    const onWhatExtentFoundationalSkill = (btnNum) => {
        btnNum == 1 ? setwhatExtentFoundationalSkill(true) : setwhatExtentFoundationalSkill(false)

    }
    const calculateRating = () => {
        if (ageExpected && ageExpectedAllSettings && outComeArea) {
            return 6
        } else if (ageExpected && ageExpectedAllSettings && outComeArea === false) {
            return 7
        } else if (ageExpected && ageExpectedAllSettings === false && whatExtent) {
            return 4
        } else if (ageExpected && !ageExpectedAllSettings && whatExtent === false) {
            return 5
        }
        // No case 
        else if (ageExpected === false && immediateFoundationSkill === false) {
            return 1
        }
        else if (ageExpected === false && immediateFoundationSkill && whatExtentFoundationalSkill) {
            return 2
        }
        else if (ageExpected === false && immediateFoundationSkill && whatExtentFoundationalSkill === false) {
            return 3
        }
    }

    const getSummary = (rating) => {
        if (rating == 6)
            return 'Between Somewhat and Completely'
        else if (rating == 7)
            return 'Completely'
        else if (rating == 1)
            return 'Not yet'
        else if (rating == 4)
            return 'Between Nearly and Somewhat'
        else if (rating == 5)
            return 'Somewhat'
        else if (rating == 2)
            return 'Between Not Yet and Nearly'
        else if (rating == 3)
            return 'Nearly'
    }

    const onNextPressed = () => {
        if (Needs_Summary && Needs_Evidencedate && Needs_Special && calculateRating()) {
            props.navigation.navigate('EcoNew8', {
                data: {
                    ...data,
                    Needs_Summary,
                    Needs_Evidencedate,
                    Needs_Special,
                    TakeAppropriate: calculateRating()
                }
            })
        } else {
            alert('Kindly enter data in all fields & calculate ratings!')
        }
    }

    const scrollViewRef = useRef();

    return (
        <View style={{
            flex: 1,
        }} >
            <Cover
                navigation={props.navigation}
                heading={ECO_HEADING_NEW}
            />
            <KeyboardAwareScrollView
                contentContainerStyle={styles.innerContainer}
                ref={scrollViewRef}
            >
                <Text style={styles.title}>VII. Outcome C: Take Appropriate Action to Meet Own Needs?</Text>
                <InputBox
                    placeholder={"Summary of Evidence*"}
                    style={{ height: 80 }}
                    value={Needs_Summary}
                    onChangeText={(text) => setNeeds_Summary(text)}
                />
                <InputBox
                    placeholder={"Sources of Supporting Evidence*"}
                    style={{ height: 80 }}
                    value={Needs_Evidencedate}
                    onChangeText={(text) => setNeeds_Evidencedate(text)}
                />
                <InputBox
                    placeholder={"Special Considerations*"}
                    style={{ height: 80 }}
                    value={Needs_Special}
                    onChangeText={(text) => setNeeds_Special(text)}
                />
                <OptionsText
                    text={'Does the child ever function in ways that would be considered age-expected with regard to this outcome?'}
                    title1={"Yes"}
                    title2={"No"}
                    onPress={(btnNum) => onAgeExpected(btnNum)}
                />
                {ageExpected ?
                    <OptionsText
                        text={'Is the child is functioning age-expected across all or almost all settings and situations?'}
                        title1={"Yes"}
                        title2={"No"}
                        onPress={(btnNum) => onAgeExpectedAllSettings(btnNum)}
                    /> :
                    null}
                {ageExpected == false ?
                    <OptionsText
                        text={'Does the child use any immediate foundational skills related to this outcome upon which to build age-expected functioning across settings and situations?'}
                        title1={"Yes"}
                        title2={"No"}
                        onPress={(btnNum) => onImmediateFoundationalSkill(btnNum)}
                    /> :
                    null}
                {ageExpectedAllSettings ?
                    <OptionsText
                        text={'Does anyone have concerns about the child functioning with regard to the outcome area?'}
                        title1={"Yes"}
                        title2={"No"}
                        onPress={(btnNum) => onOutcomeArea(btnNum)}
                    /> :
                    null}
                {ageExpected && ageExpectedAllSettings == false ?
                    <OptionsText
                        text={'To what extent is the child is functioning age-expected across settings and situations? '}
                        title1={"       Occasional use of \nage-expected\n skills;\n more\n behavior that \nis not age-expected"}
                        title2={"Uses a mix of \nage-expected\n and not \nage-expected \nbehaviors \nand skills \nacross \nsettings and situations"}
                        onPress={(btnNum) => onWhatExtent(btnNum)}
                    /> :
                    null
                }
                {ageExpected == false && immediateFoundationSkill ?
                    <OptionsText
                        text={'To what extent is the child using immediate foundational skills across settings and situations? *'}
                        title1={"       Occasional use of \n        immediate \n    foundational skills"}
                        title2={"Uses immediate \nfoundational skills\n most or all of \nthe time across\n settings and situations"}
                        onPress={(btnNum) => onWhatExtentFoundationalSkill(btnNum)}
                    /> : null}

                {calculateRating() ? <Text>{`Rating is = ${calculateRating()}`}</Text> : null}
                <InputBox
                    editable={false}
                    placeholder={""}
                    style={{ height: 40 }}
                    value={getSummary(calculateRating())}
                />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10
                }}>
                    <Text>Next</Text>
                    <RoundButton
                        onPress={() => onNextPressed()}
                    />
                </View>
            </KeyboardAwareScrollView>
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
export default ECO7;