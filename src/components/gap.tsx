import React from 'react';
import { View } from 'react-native';

interface GapProps {
    height?: any,
    width?: any,
    style?: any
}

const Gap = (props: GapProps) => {
    return (
        <View style={{width: props.width, height: props.height, ...props.style}} />
    );
}

export default Gap
