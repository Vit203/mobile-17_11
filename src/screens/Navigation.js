import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'

const Tab = createBottomTabNavigator();

import Home from './Home';
import Cart from './Cart';
import Not from './Not';
import QrCode from './QrCode';
import His from './His';
export default function Navigation() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size, color }) => {
                let iconName;
                if (route.name === "Home") {
                    iconName = focused ? 'home' : 'home';
                } else if (route.name === "Not") {
                    iconName = focused ? 'bell' : 'bell-o';
                } else if (route.name === "QrCode") {
                    iconName = focused ? 'qrcode' : 'qrcode';
                } else if (route.name === "His") {
                    iconName = focused ? 'history' : 'history';
                } else if (route.name === "Cart") {
                    iconName = focused ? 'cart-arrow-down' : 'cart-plus';
                }
                return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#2DC0FF',
        })}>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Not" component={Not} />
            <Tab.Screen name="QrCode" component={QrCode} />
            <Tab.Screen name="His" component={His} />
            <Tab.Screen name="Cart" component={Cart} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})