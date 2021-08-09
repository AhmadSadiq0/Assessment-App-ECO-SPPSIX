import React from 'react';
import { ImageBackground, Image, View, TouchableOpacity } from 'react-native';
import { COVER_IMG } from '../../res/drawables';
import { Heading } from '.';
import BackButton from './BackButton';
const Cover = (props) => {
    return (
        <View style={{ height: 200 }}>
            <ImageBackground resizeMode={'cover'}
                style={{ height: 180, width: '100%' }} source={COVER_IMG}>
                <BackButton
                    onPress={() => props.navigation.goBack()}
                />
            </ImageBackground>
            <View style={{
                marginTop: 50,
                width: '100%',
                justifyContent: 'center',
                position: 'absolute',
                bottom: 0
            }}>
                {props.heading ?
                    <Heading
                        showMessage={props.showMessage}
                        textStyle={props.textStyle}
                        onShowMessagePressed={() => props.onShowMessagePressed()}
                    >{props.heading}
                    </Heading>

                    :
                    null}
            </View>
        </View>
    )
}
export default Cover;