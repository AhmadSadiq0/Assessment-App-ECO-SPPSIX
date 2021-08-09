import React from 'react';
import { TouchableOpacity, ScrollView, Text, View, Modal, Image } from 'react-native';
import { BLUE_COLOUR, LIGHT_BLUE_COLOUR, CLOSE_IMG } from '../../res/drawables';
import { ECO_TEXT } from '../../res/strings';

const MessageModal = (props) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}>
            <View style={styles.modalContainer}>
                <View></View>
                <View style={styles.modalInnerContainer}>
                    <TouchableOpacity onPress={() => props.onClosePressed()}>
                        <Image
                            style={{
                                margin:5,
                                width: 25,
                                height: 25,
                                alignSelf: 'flex-end'
                            }}
                            source={CLOSE_IMG}>
                        </Image>
                    </TouchableOpacity>
                    <ScrollView>
                        <Text
                            style={{ color: BLUE_COLOUR, padding: 5 }}>{
                                ECO_TEXT}
                        </Text>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}
const styles = {
    modalContainer: {
        flex: 1,
        justifyContent: 'space-between'
    },
    modalInnerContainer: {
        height: '70%',
        margin: 10,
        borderRadius: 20,
        backgroundColor: LIGHT_BLUE_COLOUR
    }
}
export default MessageModal;