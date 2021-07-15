import React from 'react';
import { ImageBackground } from 'react-native';
import { COVER_IMG } from '../../res/drawables';
import { Heading } from '.';
const Cover = (props) => {
    return (
        <ImageBackground resizeMode={'cover'} style={{ height: '30%',width:'100%',justifyContent:'center' }} source={COVER_IMG}>
            {props.heading ? <Heading >{props.heading}</Heading> : null}
        </ImageBackground>
    )
}
export default Cover;