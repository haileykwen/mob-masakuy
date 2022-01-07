import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Create, Home, NewPassword, Notification, Onboarding, PasswordRecovery, PasswordRecoveryCode, Profile, Search, Signin, Signup, VerificationCode, ViewRecipe } from "../screens";

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
    <RecipeStack.Navigator initialRouteName="View" screenOptions={{ headerShown: false }}>
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

const RootStack = createNativeStackNavigator();
const RootStackScreen = () => {
    return (
        <RootStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="RecipeStack"
        >
            <RootStack.Screen name="AuthStack" component={AuthStackScreen} />
            <RootStack.Screen name="HomeStack" component={HomeStackScreen} />
            <RootStack.Screen name="RecipeStack" component={RecipeStackScreen} />
            <RootStack.Screen name="NotificationStack" component={NotificationStackScreen} />
            <RootStack.Screen name="ProfileStack" component={ProfileStackScreen} />
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