import React, { useState, useRef, useEffect } from 'react';
import { ImageBackground, View } from 'react-native';
import { Input, Text, RoundButton, BackButton, Heading, InputDate } from '../../../components';
import { BACKGROUND_ONE_IMG, BLUE_COLOUR, WHITE_COLOUR } from '../../../../res/drawables';
import { GENDER_VALUUES } from '../../../../res/strings';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import DropDownPicker from 'react-native-dropdown-picker';
import { getDistricts } from '../../../services/GeneralServices';
const LandingSppSix = (props) => {
    const [studentInitials, setStudentInitials] = useState(null)
    const [gender, setGender] = useState(null)
    const [dob, setDob] = useState(null)
    const [districtsList, setDistrictsList] = useState([])
    const [district, setDistrict] = useState(null)

    const [open, setOpen] = useState(false);
    const [openDistrict, setOpenDistrict] = useState(false);
    const scrollViewRef = useRef();


    useEffect(() => {
        loadDistrict()
    }, [])


    async function loadDistrict() {
        let res = await getDistricts();
        if (res.success)
            setDistrictsList(res.data)
    }
    const onNextPressed = () => {
        if (studentInitials && gender && dob && district) {
            props.navigation.navigate('SppsixQuestionnaire', {
                data: {
                    StudentInitial: studentInitials,
                    Gender: gender,
                    DOB: dob,
                    District: district
                }
            })
        } else {
            alert('Kindly enter data in all fields!')
        }
    }

    return (
        <ImageBackground style={{ flex: 1, justifyContent: 'space-between' }} source={BACKGROUND_ONE_IMG}>
            <BackButton
                onPress={() => props.navigation.goBack()}
            />
            <KeyboardAwareScrollView
                contentContainerStyle={styles.innerContainer}
                ref={scrollViewRef}
            >
                <Heading style={{ height: 70 }}>{'EE SPP 6 \n Decision Tree'}</Heading>
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
                    placeholder={'Stundent Initials'}
                    value={dob}
                    onChangeText={text => setDob(text)}
                />
                <DropDownPicker
                    searchable={true}
                    loading={!districtsList.length}
                    open={openDistrict}
                    value={district}
                    items={districtsList}
                    setOpen={setOpenDistrict}
                    setValue={setDistrict}
                    placeholder="District"
                    textStyle={{ color: WHITE_COLOUR }}
                    style={{ backgroundColor: BLUE_COLOUR }}
                    dropDownContainerStyle={{ backgroundColor: BLUE_COLOUR }}
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
    }
    , text: {
        marginTop: 30,
        marginLeft: 20
    }
}
export default LandingSppSix;