import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Gap } from '.';
import { GlobalStyle } from '../styles';
import RecipeItem from './recipeItem';

interface RecipeListProps {
    recipes: any,
    navigation?: any
}

const RecipeList = (props: RecipeListProps) => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
                <Gap height={12} />
                <View style={styles.list}>
                    {props.recipes && props.recipes.map((recipe: any, index: any) => (
                        <View key={index}>
                            <RecipeItem recipeData={recipe} navigation={props.navigation} />
                        </View>
                    ))}
                </View>
                <Gap height={12} />
            </ScrollView>
        </View>
    )
}

export default RecipeList;

const styles = StyleSheet.create({
    container: {
        minHeight: GlobalStyle.fullHeight - GlobalStyle.statusBarHeight - 63.7,
        paddingBottom: 48.8
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});