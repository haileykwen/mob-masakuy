import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home, NewPassword, Onboarding, PasswordRecovery, PasswordRecoveryCode, Signin, Signup, VerificationCode } from "../screens";

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
    </HomeStack.Navigator>
);

const RootStack = createNativeStackNavigator();
const RootStackScreen = () => {
    return (
        <RootStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="HomeStack"
        >
            <RootStack.Screen name="AuthStack" component={AuthStackScreen} />
            <RootStack.Screen name="HomeStack" component={HomeStackScreen} />
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