import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Gap, Heading } from '.';
import { IcLoveActive, IcLoveInactive } from '../assets/images';
import { Colors, GlobalStyle } from '../styles';

interface RecipeItemProps {
    recipeData: any,
    key: any
}

const RecipeItem = ({recipeData, key}: RecipeItemProps) => {
    return (
        <View style={styles.container} key={key}>
            <View style={styles.creator}>
                <Image source={recipeData.displayPic} style={styles.creatorPic} />
                <Text style={styles.creatorName}>{recipeData.name}</Text>
            </View>
            <View style={styles.imageWrapper}>
                <Image source={recipeData.pic} style={styles.pic} />
                <TouchableOpacity style={styles.loveWrapper}>
                    <Image source={recipeData.like && recipeData.like === true ? IcLoveActive : IcLoveInactive} style={styles.loveIcon} />
                </TouchableOpacity>
            </View>
            <Gap height={GlobalStyle.paddingTertiary} />
            <Heading type='secondary' text={recipeData.title} />
            <Gap height={8} />
            <Text style={styles.categoryTime}>{`${recipeData.category} >${recipeData.time}`}</Text>
        </View>
    );
}

export default RecipeItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 12
    },
    creator: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: GlobalStyle.paddingTertiary
    },
    creatorPic: {
        width: (GlobalStyle.fullWidth / 2 - 36) / 4.8,
        height: (GlobalStyle.fullWidth / 2 - 36) / 4.8,
        borderRadius: 11
    },
    creatorName: {
        fontFamily: GlobalStyle.fontPrimaryMedium,
        fontSize: 12,
        color: Colors.textMain,
        marginLeft: 8
    },
    pic: {
        width: GlobalStyle.fullWidth / 2 - 36,
        height: GlobalStyle.fullWidth / 2 - 36,
        borderRadius: 16
    },
    categoryTime: {
        fontFamily: GlobalStyle.fontPrimaryMedium,
        fontSize: 12,
        color: Colors.textSecondary
    },
    imageWrapper: {
        position: 'relative'
    },
    loveWrapper: {
        width: (GlobalStyle.fullWidth / 2 - 36) / 4.8,
        height: (GlobalStyle.fullWidth / 2 - 36) / 4.8,
        borderRadius: 11,
        position: 'absolute',
        right: GlobalStyle.paddingTertiary,
        top: GlobalStyle.paddingTertiary,
        backgroundColor: 'yellow'
    },
    loveIcon: {
        width: (GlobalStyle.fullWidth / 2 - 36) / 4.8,
        height: (GlobalStyle.fullWidth / 2 - 36) / 4.8,
        borderRadius: 11,
    }
});