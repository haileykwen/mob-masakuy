import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { RecipeList } from '../../../../components';
import { DummyRecipes } from '../../../../configs';
import { Colors } from '../../../../styles';

class Recipes extends Component {
    render() {
        return (
            <View style={styles.container}>
                <RecipeList recipes={DummyRecipes} />
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