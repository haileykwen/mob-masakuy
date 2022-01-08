import { FormikProps } from 'formik';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { RecipeList } from '../../../../components';
import { DummyRecipes } from '../../../../configs';
import { Colors } from '../../../../styles';

interface FollowingProps {
    navigation?: any
}

interface FollowingState {}

class Following extends Component<FollowingProps, FollowingState> {
    constructor(props: FollowingProps){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <RecipeList recipes={DummyRecipes} navigation={this.props.navigation} />
            </View>
        );
    }
}

export default Following;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        backgroundColor: Colors.white
    }
});