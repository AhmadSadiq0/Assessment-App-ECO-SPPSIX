import React, { useState, useRef, useEffect } from 'react';
import { ImageBackground, View, Dimensions, Button } from 'react-native';
import { Input, Text, RoundButton, BackButton, Heading, List, Cover } from '../../../../../components';
import { BACKGROUND_ONE_IMG, BLUE_COLOUR, WHITE_COLOUR } from '../../../../../../res/drawables';
import { ROLE_LISTINGS_SUMMARY, ECO_HEADING_NEW } from '../../../../../../res/strings';
import DropDownPicker from 'react-native-dropdown-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

const ECO3 = (props) => {
    const [lastName, setLastName] = useState(null)
    const [firstName, setFirstName] = useState(null)
    const [middleName, setMiddleName] = useState(null)
    const [role, setRole] = useState(null)
    const [users, setUsers] = useState([])


    const [open, setOpen] = useState(false);
    const scrollViewRef = useRef();


    const { data } = props.route.params;
    const { selectedParticipantsTypes } = data;
    console.log(data)

    const onNextPressed = () => {
        if (users.length > 1) {
            props.navigation.navigate('EcoNew4', {
                data: {
                    ...data,
                    SummaryRating: users
                }
            })
        } else {
            alert('Add atleast two persons who participated!')
        }
    }
    const onAddPressed = () => {
        if (lastName && firstName && role) {
            let array = [...users];
            let obj = {
                lastname: lastName,
                firstname: firstName,
                // middlename: middleName,
                role: role
            }
            array.push(obj)
            setUsers(array)
            setLastName(null)
            setFirstName(null)
            setRole(null)
            setMiddleName(null)

        } else {
            alert('Kindly enter data in all fields!')
        }
    }


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
                <Text style={styles.title}>III. Persons Involved in Deciding Summary Ratings</Text>

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
                {/* <Input
                    placeholder={'Middle name'}
                    value={middleName}
                    onChangeText={text => setMiddleName(text)}
                /> */}


                <DropDownPicker
                    open={open}
                    value={role}
                    items={selectedParticipantsTypes}
                    setOpen={setOpen}
                    setValue={setRole}
                    placeholder="Role*"
                    textStyle={{ color: WHITE_COLOUR }}
                    style={{ backgroundColor: BLUE_COLOUR, marginBottom: 5 }}
                    dropDownContainerStyle={{ backgroundColor: BLUE_COLOUR }}
                />
                <Button
                    title={'Add'}
                    onPress={() => onAddPressed()}
                />

                <List
                    data={users}
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
export default ECO3;