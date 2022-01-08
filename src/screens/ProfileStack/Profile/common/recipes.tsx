import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { RecipeList } from '../../../../components';
import { DummyRecipes } from '../../../../configs';
import { Colors } from '../../../../styles';

interface RecipesProps {
    navigation?: any
}

interface RecipesState {}

class Recipes extends Component<RecipesProps, RecipesState> {
    constructor(props: RecipesProps){
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

export default Recipes;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        backgroundColor: Colors.white
    }
});