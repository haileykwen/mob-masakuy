import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { DummyFood1, DummyUser1, IcLikes } from '../../../assets/images';
import { Gap, Heading, Paragraph } from '../../../components';
import { Lang } from '../../../configs';
import { Colors, GlobalStyle } from '../../../styles';
import IngredientsItem from './common/ingredientsItem';
import StepsItem from './common/stepsItem';

class ViewRecipe extends Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Image source={DummyFood1} style={styles.recipePic} />
                    <View style={styles.recipeData}>
                        <Heading type='secondary' text='Cacao Maca Walnut Milk' />
                        <Gap height={8} />
                        <Paragraph type='secondary' text='Food, 60 mins' />
                        <Gap height={16} />

                        <View style={styles.chefWrapper}>
                            <Image source={DummyUser1} style={styles.chefPic} />
                            <Gap width={8} />
                            <Heading type='tertiary' text='Elena Shelby' />

                            <View style={styles.likes}>
                                <Image source={IcLikes} style={styles.likesIcon} />
                                <Gap width={8} />
                                <Heading type='tertiary' text='273 likes' />
                            </View>
                        </View>

                        <Gap height={16} />
                        <Gap height={2} width={'100%'} style={{backgroundColor: Colors.outline}} />
                        <Gap height={16} />

                        <Heading type='secondary' text={Lang.EN.description} />    
                        <Gap height={8} />
                        <Paragraph type='secondary' text='Your recipe has been uploaded, you can see it on your profile. Your recipe has been uploaded, you can see it on your' />                    
                    
                        <Gap height={16} />
                        <Gap height={2} width={'100%'} style={{backgroundColor: Colors.outline}} />
                        <Gap height={16} />

                        <Heading type='secondary' text={Lang.EN.ingredients} />    
                        <Gap height={8} />

                        <IngredientsItem text='4 eggs' />
                        <IngredientsItem text='1/2 butter' />
                        <IngredientsItem text='1/2 cream' />

                        <Gap height={2} width={'100%'} style={{backgroundColor: Colors.outline}} />
                        <Gap height={16} />

                        <Heading type='secondary' text={Lang.EN.steps} /> 
                        <Gap height={8} />

                        <StepsItem number='1' text='Your recipe has been uploaded, you can see it on your profile. Your recipe has been uploaded, you can see it on your' />
                        <StepsItem number='2' text='Your recipe has been uploaded, you can see it on your profile. Your recipe has been uploaded, you can see it on your' />
                        <StepsItem number='3' text='Your recipe has been uploaded, you can see it on your profile. Your recipe has been uploaded, you can see it on your' />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default ViewRecipe;

const styles = StyleSheet.create({
    container: {
        minHeight: GlobalStyle.fullHeight - GlobalStyle.statusBarHeight,
        backgroundColor: Colors.white
    },
    recipeData: {
        padding: GlobalStyle.paddingPrimary
    },
    recipePic: {
        width: GlobalStyle.fullWidth,
        height: GlobalStyle.fullWidth / 1.5,
    },
    chefWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    chefPic: {
        width: 32,
        height: 32,
        borderRadius: 50
    },
    likes: {
        flexDirection: 'row',
        marginRight: 0,
        marginLeft: 'auto'
    },
    likesIcon: {
        width: 32,
        height: 32
    }
});