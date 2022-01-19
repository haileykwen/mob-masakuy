import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { CustomContainer, Gap } from '.';
import { GlobalStyle } from '../styles';
import RecipeItem from './recipeItem';

interface RecipeListProps {
    recipes: any,
    navigation?: any
}

const RecipeList = (props: RecipeListProps) => {
    return (
        <CustomContainer noPadding nestedScrollEnabled>
            <Gap height={12} />
            <View style={styles.list}>
                {props.recipes && props.recipes.map((recipe: any, index: any) => (
                    <View key={index}>
                        <RecipeItem recipeData={recipe} navigation={props.navigation} />
                    </View>
                ))}
            </View>
            <Gap height={12} />
        </CustomContainer>
    )
}

export default RecipeList;

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});