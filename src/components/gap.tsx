import React from 'react';
import { View } from 'react-native';

interface GapProps {
    height?: number,
    width?: number
}

const Gap = (props: GapProps) => {
    return (
        <View style={{width: props.width, height: props.height}} />
    );
}

export default Gap
