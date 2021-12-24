import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import RecipeItem from './recipeItem';

interface RecipeListProps {
    recipes: any
}

const RecipeList = (props: RecipeListProps) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.list}>
                {props.recipes && props.recipes.map((recipe: any, index: any) => (
                    <RecipeItem
                        recipeData={recipe}
                        key={index}
                    />
                ))}
            </View>
        </ScrollView>
    )
}

export default RecipeList;

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});