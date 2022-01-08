import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Create, Home, NewPassword, Notification, Onboarding, PasswordRecovery, PasswordRecoveryCode, Profile, Search, Signin, Signup, VerificationCode, ViewRecipe } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { IcHomeActive, IcHomeInactive, IcNotificationActive, IcNotificationInactive, IcProfileActive, IcProfileInactive, IcRecipeActive, IcRecipeInactive } from "../assets/images";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Colors, GlobalStyle } from "../styles";

const AuthStack = createNativeStackNavigator();
const AuthStackScreen = () => (
    <AuthStack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Onboarding" component={Onboarding} />
        <AuthStack.Screen name="SignUp" component={Signup} />
        <AuthStack.Screen name="SignIn" component={Signin} />
        <AuthStack.Screen name="VerificationCode" component={VerificationCode} />
        <AuthStack.Screen name="PasswordRecovery" component={PasswordRecovery} />
        <AuthStack.Screen name="PasswordRecoveryCode" component={PasswordRecoveryCode} />
        <AuthStack.Screen name="NewPassword" component={NewPassword} />
    </AuthStack.Navigator>
);

const HomeStack = createNativeStackNavigator();
interface HomeStackProps { navigation?: any, route?: any }
const HomeStackScreen = ({navigation, route}: HomeStackProps) => {
    if (route.params) {
        navigation.setOptions({visible: false});
    } else {
        navigation.setOptions({visible: true});
    }

    return (
        <HomeStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="Search" component={Search} />
        </HomeStack.Navigator>
    );
}

const RecipeStack = createNativeStackNavigator();
interface RecipeStackProps { navigation?: any, route?: any }
const RecipeStackScreen = ({navigation, route}: RecipeStackProps) => {
    if (route.params) {
        navigation.setOptions({visible: false});
    } else {
        navigation.setOptions({visible: true});
    }

    return (
        <RecipeStack.Navigator initialRouteName="Create" screenOptions={{ headerShown: false }}>
            <RecipeStack.Screen name="Create" component={Create} />
            <RecipeStack.Screen name="View" component={ViewRecipe} />
        </RecipeStack.Navigator>
    );
}

const NotificationStack = createNativeStackNavigator();
interface NotificationStackProps { navigation?: any, route?: any }
const NotificationStackScreen = ({navigation, route}: NotificationStackProps) => {
    if (route.params) {
        navigation.setOptions({visible: false});
    } else {
        navigation.setOptions({visible: true});
    }

    return (
        <NotificationStack.Navigator initialRouteName="Notification" screenOptions={{ headerShown: false }}>
            <NotificationStack.Screen name="Notification" component={Notification} />
        </NotificationStack.Navigator>
    );
}

const ProfileStack = createNativeStackNavigator();
interface ProfileStackProps { navigation?: any, route?: any }
const ProfileStackScreen = ({navigation, route}: ProfileStackProps) => {
    if (route.params) {
        navigation.setOptions({visible: false});
    } else {
        navigation.setOptions({visible: true});
    }

    return (
        <ProfileStack.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
            <ProfileStack.Screen name="Profile" component={Profile} />
        </ProfileStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();
interface MyTabBarProps { state: any, descriptors: any, navigation: any }
const MyTabBar = ({ state, descriptors, navigation }: MyTabBarProps) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;
    const visible = focusedOptions.visible ? true : false;

    return (
        visible ? <View 
            style={{ 
                backgroundColor: Colors.white,
                height: 48.8, flexDirection: 'row', 
                justifyContent: 'space-around',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.00,
                elevation: 24
            }}
        >
            {state.routes.map((route: { key: string | number; name: any; }, index: any) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        // navigation.navigate({ name: route.name, merge: true });
                        navigation.reset({
                            routes: [{ name: route.name, merge: true }]
                        });
                    } else {
                        navigation.reset({
                            routes: [{ name: route.name, merge: true }]
                        });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ 
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            style={{
                                width: 24,
                                height: 24
                            }}
                            source={
                                label === 'Home' 
                                    ? isFocused ? IcHomeActive : IcHomeInactive
                                    : label === 'Recipe' 
                                        ? isFocused ? IcRecipeActive : IcRecipeInactive
                                        : label === 'Notification' 
                                            ? isFocused ? IcNotificationActive : IcNotificationInactive
                                            : label === 'Profile'
                                                ? isFocused ? IcProfileActive : IcProfileInactive
                                                : 'none'
                            }
                        />
                        <Text 
                            style={{ 
                                color: isFocused ? Colors.primary : Colors.textSecondary,
                                fontFamily: GlobalStyle.fontPrimaryMedium,
                                fontSize: 12
                            }}
                        >
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View> : <View />
    );
}
const BottomTabs = () => (
    <Tab.Navigator
        tabBar={props => <MyTabBar {...props} />}
    >
        <Tab.Screen
            name="HomeTab"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                headerShown: false,
                // tabBarLabelStyle: {fontFamily: GlobalStyle.fontPrimaryRegular, fontSize: // }
            }}
        />
        <Tab.Screen 
            name="RecipeTab"
            component={RecipeStackScreen}
            options={{
                tabBarLabel: 'Recipe',
                headerShown: false
            }}
        />
        <Tab.Screen
            name="NotificationTab"
            component={NotificationStackScreen}
            options={{
                tabBarLabel: 'Notification',
                headerShown: false
            }}
        />
        <Tab.Screen
            name="ProfileTab"
            component={ProfileStackScreen}
            options={{
                tabBarLabel: 'Profile',
                headerShown: false
            }}
        />
    </Tab.Navigator>
)

const RootStack = createNativeStackNavigator();
const RootStackScreen = () => {
    return (
        <RootStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="AuthStack"
        >
            <RootStack.Screen name="AuthStack" component={AuthStackScreen} />
            <RootStack.Screen name="BottomTabs" component={BottomTabs} />
        </RootStack.Navigator>
    );
}

export default () => {
    return (
        <NavigationContainer>
            <RootStackScreen />
        </NavigationContainer>
    );
};