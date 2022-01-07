import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Create, Home, NewPassword, Notification, Onboarding, PasswordRecovery, PasswordRecoveryCode, Profile, Search, Signin, Signup, VerificationCode, ViewRecipe } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { IcHomeActive, IcHomeInactive, IcNotificationActive, IcNotificationInactive, IcProfileActive, IcProfileInactive, IcRecipeActive, IcRecipeInactive } from "../assets/images";
import { Image } from "react-native";
import { Colors, GlobalStyle } from "../styles";

const AuthStack = createNativeStackNavigator();
const AuthStackScreen = () => (
    <AuthStack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Onboarding" component={Onboarding} />
        <AuthStack.Screen name="SignIn" component={Signin} />
        <AuthStack.Screen name="SignUp" component={Signup} />
        <AuthStack.Screen name="VerificationCode" component={VerificationCode} />
        <AuthStack.Screen name="PasswordRecovery" component={PasswordRecovery} />
        <AuthStack.Screen name="PasswordRecoveryCode" component={PasswordRecoveryCode} />
        <AuthStack.Screen name="NewPassword" component={NewPassword} />
    </AuthStack.Navigator>
);

const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => (
    <HomeStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="Search" component={Search} />
    </HomeStack.Navigator>
);

const RecipeStack = createNativeStackNavigator();
const RecipeStackScreen = () => (
    <RecipeStack.Navigator initialRouteName="Createt" screenOptions={{ headerShown: false }}>
        <RecipeStack.Screen name="Create" component={Create} />
        <RecipeStack.Screen name="View" component={ViewRecipe} />
    </RecipeStack.Navigator>
);

const NotificationStack = createNativeStackNavigator();
const NotificationStackScreen = () => (
    <NotificationStack.Navigator initialRouteName="Notification" screenOptions={{ headerShown: false }}>
        <NotificationStack.Screen name="Notification" component={Notification} />
    </NotificationStack.Navigator>
);

const ProfileStack = createNativeStackNavigator();
const ProfileStackScreen = () => (
    <ProfileStack.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
        <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
);

const Tab = createBottomTabNavigator();
const BottomTabs = () => (
    <Tab.Navigator
        screenOptions={{
            tabBarStyle: {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.00,

                elevation: 24,
            }
        }}
    >
        <Tab.Screen
            name="HomeTab"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarLabelStyle: {fontFamily: GlobalStyle.fontPrimaryRegular, fontSize: 12},
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: Colors.outline,
                headerShown: false,
                tabBarIcon: ({ size, focused, color }) => {
                    return (
                        <Image
                            style={{ width: 24, height: 24 }}
                            source={focused ? IcHomeActive : IcHomeInactive}
                        />
                    );
                }
            }}
        />
        <Tab.Screen
            name="RecipeTab"
            component={RecipeStackScreen}
            options={{
                tabBarLabel: 'Recipe',
                tabBarLabelStyle: {fontFamily: GlobalStyle.fontPrimaryRegular, fontSize: 12},
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: Colors.outline,
                headerShown: false,
                tabBarIcon: ({ size, focused, color }) => {
                    return (
                        <Image
                            style={{ width: 24, height: 24 }}
                            source={focused ? IcRecipeActive : IcRecipeInactive}
                        />
                    );
                }
            }}
        />
        <Tab.Screen
            name="NotificationTab"
            component={NotificationStackScreen}
            options={{
                tabBarLabel: 'Notification',
                tabBarLabelStyle: {fontFamily: GlobalStyle.fontPrimaryRegular, fontSize: 12},
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: Colors.outline,
                headerShown: false,
                tabBarIcon: ({ size, focused, color }) => {
                    return (
                        <Image
                            style={{ width: 24, height: 24 }}
                            source={focused ? IcNotificationActive : IcNotificationInactive}
                        />
                    );
                }
            }}
        />
        <Tab.Screen
            name="ProfileTab"
            component={ProfileStackScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarLabelStyle: {fontFamily: GlobalStyle.fontPrimaryRegular, fontSize: 12},
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: Colors.outline,
                headerShown: false,
                tabBarIcon: ({ size, focused, color }) => {
                    return (
                        <Image
                            style={{ width: 24, height: 24 }}
                            source={focused ? IcProfileActive : IcProfileInactive}
                        />
                    );
                }
            }}
        />
    </Tab.Navigator>
)

const RootStack = createNativeStackNavigator();
const RootStackScreen = () => {
    return (
        <RootStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="BottomTabs"
        >
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