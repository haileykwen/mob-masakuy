import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { RecipeList } from '../../../../components';
import { DummyRecipes } from '../../../../configs';
import { Colors } from '../../../../styles';

interface ExploreProps {
    navigation?: any
}

interface ExploreState {}

class Explore extends Component<ExploreProps, ExploreState> {
    constructor(props: ExploreProps){
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

export default Explore;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        backgroundColor: Colors.white
    }
});