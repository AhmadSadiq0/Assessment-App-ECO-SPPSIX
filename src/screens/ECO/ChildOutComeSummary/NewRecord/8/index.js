import React, { useState, useRef, useContext } from 'react';
import { ImageBackground, View, Dimensions, Button } from 'react-native';
import { Input, Text, RoundButton, Cover, Heading, InputDate, PrimaryButton } from '../../../../../components';
import { ECO_HEADING_NEW } from '../../../../../../res/strings';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { Context as AuthContext } from '../../../../../store/context/AuthContext';
import { createRecord } from '../../../../../services/EcoToolServices';
import { GET_CURRENT_DATE } from '../../../../../functions';
const ECO8 = (props) => {
    const { state: auth } = useContext(AuthContext);
    const { user } = auth;
    const [username, setUsername] = useState(user.Name)
    const [date, setDate] = useState(GET_CURRENT_DATE())
    const [isSubmitted, setIsSubmitted] = useState(false)

    const { data } = props.route.params;
    const scrollViewRef = useRef();
    const bdateRef = useRef();


    const onNextPressed = () => {

    }
    const onSubmitPressed = async () => {
        console.log(auth)
        if (!isSubmitted) {
            let obj = {
                ...data,
                status: 'Entry',
                "Date": date,
                User_ID: auth.user.UserID,
                ExpirationDate: date,
                S_ID: ""
            }
            console.log(obj)
            let res = await createRecord(obj)
            console.log(res)
            if (res.success) {
                setIsSubmitted(true)
                alert('Thank you,Records have been saved in database')
            }
            else
                alert('Could not create record,please try again')
        } else {
            props.navigation.goBack();
            props.navigation.goBack();
            props.navigation.goBack();
            props.navigation.goBack();
            props.navigation.goBack();
            props.navigation.goBack();
            props.navigation.goBack();
            props.navigation.goBack();
        }

    }
    const handleDob = (text, ref) => {
        setDate(text)
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
                <Text style={styles.title}>VIII. Entered into ECO App By</Text>

                <Input
                    editable={false}
                    placeholder={'Username'}
                    value={username}
                    onChangeText={text => setUsername(text)}
                />

                <InputDate
                    editable={false}
                    ref={bdateRef}
                    placeholder={'Date  MM/DD/YYYY*'}
                    value={date}
                    onChangeText={(text, ref) => handleDob(text, ref)}
                />

                <PrimaryButton
                    style={{ alignSelf: 'center' }}
                    title={!isSubmitted ? 'Submit' : 'Go to home'}
                    onPress={() => onSubmitPressed()}
                />


            </KeyboardAwareScrollView>
            {/* <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 20
            }}>
                <Text>Next</Text>
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
export default ECO8;