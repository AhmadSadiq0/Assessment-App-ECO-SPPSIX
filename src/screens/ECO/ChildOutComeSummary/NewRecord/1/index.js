import React, { useState, useRef, useEffect } from 'react';
import { ImageBackground, View, Dimensions, ScrollView } from 'react-native';
import { Input, Text, RoundButton, BackButton, Cover, InputDate } from '../../../../../components';
import { BACKGROUND_ONE_IMG, BLUE_COLOUR, WHITE_COLOUR } from '../../../../../../res/drawables';
import { GENDER_VALUUES, ECO_HEADING_NEW } from '../../../../../../res/strings';
import DropDownPicker from 'react-native-dropdown-picker';
import { getDistricts } from '../../../../../services/GeneralServices';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { checkDate } from '../../../../../functions';

const LandingSppSix = (props) => {
    const [lastName, setLastName] = useState(null)
    const [firstName, setFirstName] = useState(null)
    const [gender, setGender] = useState(null)
    const [dob, setDob] = useState(null)
    const [districtsList, setDistrictsList] = useState([])
    const [district, setDistrict] = useState(null)
    const [school, setSchool] = useState(null)
    const [sisid, setSisId] = useState(null)

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
        if (firstName && lastName && gender && dob && district) {
            if (checkDate(dob)) {
                props.navigation.navigate('EcoNew2', {
                    data: {
                        Name: firstName + ' ' + lastName,
                        Gender: gender,
                        DOB: dob,
                        District: district,
                        School: school,
                        sisid,
                        L_Name:lastName,
                        F_Name:firstName
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
        <View style={styles.container} >
           
            <Cover
                navigation={props.navigation}
                heading={ECO_HEADING_NEW}
            />
            <KeyboardAwareScrollView
                contentContainerStyle={styles.innerContainer}
                ref={scrollViewRef}
            >
                <Text style={styles.title}>I.Child's Information</Text>

                <Input
                    placeholder={'Last name*'}
                    value={lastName}
                    onChangeText={text => setLastName(text)}
                />
                <Input
                    placeholder={'First name*'}
                    value={firstName}
                    onChangeText={text => setFirstName(text)}
                />


                <DropDownPicker
                    open={open}
                    value={gender}
                    items={GENDER_VALUUES}
                    setOpen={setOpen}
                    setValue={setGender}
                    placeholder="Gender*"
                    textStyle={{ color: WHITE_COLOUR }}
                    style={{ backgroundColor: BLUE_COLOUR }}
                    dropDownContainerStyle={{ backgroundColor: BLUE_COLOUR }}
                />
                <InputDate
                    ref={bdateRef}
                    placeholder={'Date of birth MM/DD/YYYY*'}
                    value={dob}
                    onChangeText={(text, ref) => handleDob(text, ref)}
                />
                <Input
                    placeholder={'School*'}
                    value={school}
                    onChangeText={text => setSchool(text)}
                />
                <Input
                    placeholder={'SIS ID'}
                    value={sisid}
                    onChangeText={text => setSisId(text)}
                />
                <DropDownPicker
                    loading={!districtsList.length}
                    open={openDistrict}
                    value={district}
                    items={districtsList}
                    setOpen={setOpenDistrict}
                    setValue={setDistrict}
                    placeholder="District*"
                    listMode="SCROLLVIEW"
                    scrollViewProps={{
                        nestedScrollEnabled: true,
                    }}
                    textStyle={{ color: WHITE_COLOUR }}
                    style={{ backgroundColor: BLUE_COLOUR, flex: 1 }}
                    dropDownContainerStyle={{ backgroundColor: BLUE_COLOUR }}
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
export default LandingSppSix;