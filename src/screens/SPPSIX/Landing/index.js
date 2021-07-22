import React, { useState, useRef, useEffect } from 'react';
import { ImageBackground, View, Dimensions, KeyboardAvoidingView } from 'react-native';
import { Input, Text, RoundButton, BackButton, Heading, InputDate } from '../../../components';
import { BACKGROUND_ONE_IMG, BLUE_COLOUR, WHITE_COLOUR } from '../../../../res/drawables';
import { GENDER_VALUUES } from '../../../../res/strings';
import DropDownPicker from 'react-native-dropdown-picker';
import { getDistricts } from '../../../services/GeneralServices';
import { ScrollView } from 'react-native-gesture-handler';
import { checkDate } from '../../../functions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
const LandingSppSix = (props) => {
    const [studentInitials, setStudentInitials] = useState(null)
    const [gender, setGender] = useState(null)
    const [dob, setDob] = useState(null)
    const [districtsList, setDistrictsList] = useState([])
    const [district, setDistrict] = useState(null)

    const [open, setOpen] = useState(false);
    const [openDistrict, setOpenDistrict] = useState(false);
    const scrollViewRef = useRef();
    const bdateRef = useRef();

    useEffect(() => {
        loadDistrict()
    }, [])


    async function loadDistrict() {
        let res = await getDistricts();
        if (res.success)
            setDistrictsList(res.data)
    }
    const onNextPressed = () => {
        console.log(bdateRef)
        if (studentInitials && gender && dob && district) {
            if (checkDate(dob)) {
                props.navigation.navigate('SppsixQuestionnaire', {
                    data: {
                        StudentInitial: studentInitials,
                        Gender: gender,
                        DOB: dob,
                        District: district
                    }
                })
            } else {
                alert('Invalid date')
            }
        } else {
            alert('Kindly enter data in all fields!')
        }
    }
    const handleDob = (text, ref) => {
        setDob(text)
    }

    return (
        <ImageBackground style={{
            flex: 1,
            height: Dimensions.get('window').height
        }} source={BACKGROUND_ONE_IMG}>
            <BackButton
                onPress={() => props.navigation.goBack()}
            />
            <KeyboardAvoidingView
                behavior={'position'}
                style={styles.innerContainer}
                ref={scrollViewRef}
            >
                <Heading >{'EE SPP 6 \nDecision Tree'}</Heading>
                <Input
                    placeholder={'Stundent Initials'}
                    value={studentInitials}
                    onChangeText={text => setStudentInitials(text)}
                />

                <DropDownPicker
                    open={open}
                    value={gender}
                    items={GENDER_VALUUES}
                    setOpen={setOpen}
                    setValue={setGender}
                    placeholder="Gender"
                    textStyle={{ color: WHITE_COLOUR }}
                    style={{ backgroundColor: BLUE_COLOUR }}
                    dropDownContainerStyle={{ backgroundColor: BLUE_COLOUR }}
                />
                <InputDate
                    ref={bdateRef}
                    placeholder={'Date of birth DD/MM/YYYY'}
                    value={dob}
                    onChangeText={(text, ref) => handleDob(text, ref)}
                />
                <DropDownPicker
                    loading={!districtsList.length}
                    open={openDistrict}
                    value={district}
                    items={districtsList}
                    setOpen={setOpenDistrict}
                    setValue={setDistrict}
                    placeholder="District"
                    listMode="SCROLLVIEW"
                    scrollViewProps={{
                        nestedScrollEnabled: true,
                    }}
                    textStyle={{ color: WHITE_COLOUR }}
                    style={{ backgroundColor: BLUE_COLOUR }}
                    dropDownContainerStyle={{ backgroundColor: BLUE_COLOUR }}
                />

            </KeyboardAvoidingView>
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
        </ImageBackground>

    )
}
const styles = {
    container: {
        flex: 1,
        padding: 5
    }, innerContainer: {
        padding: 20,
    }
    , text: {
        marginTop: 30,
        marginLeft: 20
    }
}
export default LandingSppSix;