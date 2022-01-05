import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Create, Home, NewPassword, Onboarding, PasswordRecovery, PasswordRecoveryCode, Search, Signin, Signup, VerificationCode } from "../screens";
import { Notification } from "../screens/NotificationStack";

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

const CreateStack = createNativeStackNavigator();
const CreateStackScreen = () => (
    <CreateStack.Navigator initialRouteName="Create" screenOptions={{ headerShown: false }}>
        <CreateStack.Screen name="Create" component={Create} />
    </CreateStack.Navigator>
);

const NotificationStack = createNativeStackNavigator();
const NotificationStackScreen = () => (
    <NotificationStack.Navigator initialRouteName="Notification" screenOptions={{ headerShown: false }}>
        <NotificationStack.Screen name="Notification" component={Notification} />
    </NotificationStack.Navigator>
);

const RootStack = createNativeStackNavigator();
const RootStackScreen = () => {
    return (
        <RootStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="NotificationStack"
        >
            <RootStack.Screen name="AuthStack" component={AuthStackScreen} />
            <RootStack.Screen name="HomeStack" component={HomeStackScreen} />
            <RootStack.Screen name="CreateStack" component={CreateStackScreen} />
            <RootStack.Screen name="NotificationStack" component={NotificationStackScreen} />
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