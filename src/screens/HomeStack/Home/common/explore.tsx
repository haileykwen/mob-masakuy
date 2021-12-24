import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { RecipeList } from '../../../../components';
import { DummyRecipes } from '../../../../configs';
import { Colors } from '../../../../styles';

class Explore extends Component {
    render() {
        return (
            <View style={styles.container}>
                <RecipeList recipes={DummyRecipes} />
            </View>
        );
    }
}

export default Explore;

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: Colors.white
    }
});