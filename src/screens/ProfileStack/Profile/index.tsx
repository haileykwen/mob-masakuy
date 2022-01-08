import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { Button, Gap, Heading, Paragraph } from '../../../components';
import { Lang } from '../../../configs';
import { DummyMyProfile } from '../../../configs/dummy';
import { Colors, GlobalStyle } from '../../../styles';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Recipes from './common/recipes';
import Liked from './common/liked';

const Tab = createMaterialTopTabNavigator();

interface ProfileTabProps {
    navigation?: any
}

const ProfileTab = (props: ProfileTabProps) => {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    fontFamily: GlobalStyle.fontPrimarySemiBold,
                    fontSize: 15,
                    textTransform: 'capitalize'
                },
                tabBarActiveTintColor: Colors.textMain,
                tabBarInactiveTintColor: Colors.textSecondary,
                tabBarIndicatorStyle: {
                    backgroundColor: Colors.primary
                },
                tabBarContentContainerStyle: {
                    padding: 7
                }
            }}
        >
            <Tab.Screen name={Lang.EN.recipes}>
                {() => <Recipes navigation={props.navigation} />}
            </Tab.Screen>
            <Tab.Screen name={Lang.EN.liked}>
                {() => <Liked navigation={props.navigation} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
}

interface ProfileProps {
    route?: any,
    navigation?: any
}

interface ProfileState {}

class Profile extends Component<ProfileProps, ProfileState> {
    constructor(props: ProfileProps){
        super(props);
        this.state = {}
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles(this.props).container}>
                    <View style={styles(this.props).userInfo}>
                        <Image source={DummyMyProfile.pic} style={styles(this.props).userPic} />
                        <Heading type='secondary' text={DummyMyProfile.name} />
                        <View style={styles(this.props).userPopularity}>
                            <View style={styles(this.props).userPopularityItem}>
                                <Heading type='secondary' text={DummyMyProfile.recipes} />
                                <Paragraph type='tertiary' text={Lang.EN.recipes} />
                            </View>
                            <View style={styles(this.props).userPopularityItem}>
                                <Heading type='secondary' text={DummyMyProfile.following} />
                                <Paragraph type='tertiary' text={Lang.EN.following} />
                            </View>
                            <View style={styles(this.props).userPopularityItem}>
                                <Heading type='secondary' text={DummyMyProfile.followers} />
                                <Paragraph type='tertiary' text={Lang.EN.followers} />
                            </View>
                        </View>
                        {this.props.route.params && this.props.route.params.user_id && <Button text={Lang.EN.follow} />}
                    </View>

                    <Gap height={8} width={'100%'} style={{backgroundColor: Colors.form}} />

                    <ProfileTab navigation={this.props.navigation} />
                </View>
            </ScrollView>
        );
    }
}

export default Profile;

const styles = (props: ProfileProps) => StyleSheet.create({
    container: {
        minHeight: props.route.params && props.route.params.user_id ? 
            GlobalStyle.fullHeight - GlobalStyle.statusBarHeight + ((GlobalStyle.fullHeight - GlobalStyle.statusBarHeight) / 1.81953642384106)
            : GlobalStyle.fullHeight - 48.8 - GlobalStyle.statusBarHeight + ((GlobalStyle.fullHeight - GlobalStyle.statusBarHeight) / 2.434108527131783),
        backgroundColor: Colors.white
    },
    userInfo: {
        padding: GlobalStyle.paddingPrimary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    userPic: {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginBottom: GlobalStyle.paddingPrimary
    },
    userPopularity: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: GlobalStyle.paddingPrimary,
        width: '100%',
        marginBottom: props.route.params && props.route.params.user_id ? 32 : 0
    },
    userPopularityItem: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});