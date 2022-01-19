import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { ButtonSelect, CustomContainer, Gap, Heading, SearchBar } from '../../../components';
import { Lang } from '../../../configs';
import { Colors, GlobalStyle } from '../../../styles';
import Explore from './common/explore';
import Following from './common/following';

const Tab = createMaterialTopTabNavigator();

interface HomeTabProps {
    navigation?: any
}

const HomeTab = (props: HomeTabProps) => {
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
            <Tab.Screen name={Lang.EN.explore}>
                {() => <Explore navigation={props.navigation} />}
            </Tab.Screen>
            <Tab.Screen name={Lang.EN.following}>
                {() => <Following navigation={props.navigation} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
}

interface HomeState {
    selectedCategory: string
}

interface HomeProps {
    navigation: any
}

class Home extends Component<HomeProps, HomeState> {
    constructor(props: HomeProps){
        super(props);
        this.state = {
            selectedCategory: 'all'
        }
    }

    render() {
        return (
            <CustomContainer 
                noPadding
                minHeight={GlobalStyle.fullHeight - GlobalStyle.statusBarHeight - 48.8 + 226.7}
            >
                <View style={styles.wrapper}>
                    <SearchBar 
                        placeholder={Lang.EN.search}
                        onSearchBarPress={() => this.props.navigation.navigate('Search')} 
                    />
                    <Gap height={GlobalStyle.paddingPrimary} />
                    <Heading type='secondary' text={Lang.EN.category} />
                    <Gap height={GlobalStyle.paddingTertiary} />
                    <View style={styles.buttonSelectWrapper}>
                        <ButtonSelect 
                            text={Lang.EN.all} 
                            active={this.state.selectedCategory === 'all' ? true : false} 
                            onPress={() => this.setState({ selectedCategory: 'all' })}
                        />
                        <Gap width={GlobalStyle.paddingTertiary} />
                        <ButtonSelect 
                            text={Lang.EN.food} 
                            active={this.state.selectedCategory === 'food' ? true : false}
                            onPress={() => this.setState({ selectedCategory: 'food' })} 
                        />
                        <Gap width={GlobalStyle.paddingTertiary} />
                        <ButtonSelect 
                            text={Lang.EN.drink} 
                            active={this.state.selectedCategory === 'drink' ? true : false} 
                            onPress={() => this.setState({ selectedCategory: 'drink' })}
                        />
                    </View>
                </View>

                <Gap width={'100%'} height={8} style={{backgroundColor: Colors.form}} />

                <HomeTab navigation={this.props.navigation} />
            </CustomContainer>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    wrapper: {
        padding: GlobalStyle.paddingPrimary
    },
    buttonSelectWrapper: {
        flexDirection: 'row'
    }
});