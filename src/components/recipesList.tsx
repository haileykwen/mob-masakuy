import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Gap } from '.';
import RecipeItem from './recipeItem';

interface RecipeListProps {
    recipes: any
}

const RecipeList = (props: RecipeListProps) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
            <Gap height={12} />
            <View style={styles.list}>
                {props.recipes && props.recipes.map((recipe: any, index: any) => (
                    <RecipeItem
                        recipeData={recipe}
                        key={index}
                    />
                ))}
            </View>
            <Gap height={12} />
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