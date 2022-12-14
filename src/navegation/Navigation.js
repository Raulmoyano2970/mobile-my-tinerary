import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer} from '@react-navigation/native';
import CitiesScreens from '../screens/CitiesScreens';
import HotelsScreens from '../screens/HotelsScreens'; 
import DetailsCity from "../screens/DetailsCity";
import DetailsHotel from "../screens/DetailsHotel";
import Itineraries from "../screens/Itineraries";
import Shows from "../screens/Shows";
import Home from '../screens/Home';
import User from '../screens/User';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import Profile from "../screens/Profile"


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeStackNavigator = createNativeStackNavigator()
function MyStack() {
    return(
        <HomeStackNavigator.Navigator>
            <HomeStackNavigator.Screen
            name='My Tinerary'
            component={Home}/>
            <HomeStackNavigator.Screen
            name='Cities'
            component={CitiesScreens}
            options={{
                headerBackTitleVisible: false,
            }}
            />
            <HomeStackNavigator.Screen
            name='Hotels'
            component={HotelsScreens}/>
            <HomeStackNavigator.Screen
            name='DetailsCity'
            component={DetailsCity}/>
            <HomeStackNavigator.Screen
            name='DetailsHotel'
            component={DetailsHotel}/>
            <HomeStackNavigator.Screen
            name='Itineraries'
            component={Itineraries}/>
            <HomeStackNavigator.Screen
            name='Profile'
            component={Profile}/>
            <HomeStackNavigator.Screen
            name='Shows'
            component={Shows}/>
            <HomeStackNavigator.Screen
            name='SignUp'
            component={SignUp}
            options={{
                headerBackTitleVisible: false,
            }}/>
            <HomeStackNavigator.Screen
            name='SignIn'
            component={SignIn}
            options={{
                headerBackTitleVisible: false,
            }}/>
        </HomeStackNavigator.Navigator>
    )
}

const Tab = createBottomTabNavigator()

function MyTabs(){
    return(
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: '#1f6e6b',
            }}
        >
            <Tab.Screen name= 'Home' 
            component={MyStack}
            options={{
                tabBarIcon: ({ color, size}) =>(
                    <MaterialCommunityIcons name='home' size={30}/>
                )
            }}
            ></Tab.Screen>
            <Tab.Screen name= 'User' component={User}
            options={{
                tabBarIcon: ({ color, size}) =>(
                    <MaterialCommunityIcons name='login' size={30}/>
                )
            }}
            ></Tab.Screen>
        </Tab.Navigator>
    )
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )

}

//esperar para poder completar