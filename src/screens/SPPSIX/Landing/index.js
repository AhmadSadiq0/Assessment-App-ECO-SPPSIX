import React, { useState, useRef, useEffect } from 'react';
import { ImageBackground, View, Dimensions, KeyboardAvoidingView } from 'react-native';
import { Input, Text, RoundButton, BackButton, Heading, InputDate, Cover } from '../../../components';
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
    const [sisId, setSisId] = useState(null)

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
        if (studentInitials && gender && dob && district && sisId) {
            if (checkDate(dob)) {
                props.navigation.navigate('SppsixQuestionnaire', {
                    data: {
                        StudentInitial: studentInitials,
                        Gender: gender,
                        DOB: dob,
                        District: district,
                        S_ID: sisId
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
        <View style={{
            flex: 1,
        }} >
            <Cover
                navigation={props.navigation}
                heading={'EE SPP 6 Decision Tree'}
            />
            <KeyboardAwareScrollView
                behavior={'position'}
                style={styles.innerContainer}
                ref={scrollViewRef}
            >
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
                    placeholder={'Date of birth MM/DD/YYYY'}
                    value={dob}
                    onChangeText={(text, ref) => handleDob(text, ref)}
                />
                <Input
                    placeholder={'SIS ID'}
                    value={sisId}
                    onChangeText={text => setSisId(text)}
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

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    margin: 50
                }}>
                    {/* <Text>Next</Text> */}
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
    }, innerContainer: {
        paddingLeft: 20,
        paddingRight: 20,
    }
    , text: {
        marginTop: 30,
        marginLeft: 20
    }
}
export default LandingSppSix;