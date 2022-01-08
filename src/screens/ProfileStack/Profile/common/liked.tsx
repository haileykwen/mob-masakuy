import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { RecipeList } from '../../../../components';
import { DummyRecipes } from '../../../../configs';
import { Colors } from '../../../../styles';


interface LikedProps {
    navigation?: any
}

interface LikedState {}
class Liked extends Component<LikedProps, LikedState> {
    constructor(props: LikedProps){
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

export default Liked;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        backgroundColor: Colors.white
    }
});