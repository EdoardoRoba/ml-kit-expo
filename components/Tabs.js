import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function Tabs({ user }) {

    // Return the SafeAreaView
    return (
        <Tab.Navigator
            tabBarShowLabel={true}
            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = "home"
                        }

                        // You can return any component that you like here!
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    headerShown: false,
                    tabBarBadgeStyle: "white",
                    tabBarInactiveTintColor: "white",
                    tabBarActiveTintColor: "white",
                    tabBarStyle: {
                        position: 'absolute',
                        eleveation: 0,
                        backgroundColor: "#0282ba",
                        height: 80,
                        headerShown: false,
                        color: "#fff"
                    },
                })

            }
        >
            <Tab.Screen name="Home" children={() => <Home user={user} />} />
        </Tab.Navigator >
    );
}
