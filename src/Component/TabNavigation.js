import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import History from './History';
import Settings from './Settings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Messages from './Messages';
import RideDetails from './RideDetails'
import RatingScreen from './Rating'
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
    return (
        <Tab.Navigator initialRouteName='HomeScreen2'
        screenOptions={
            {headerShown : false,
            tabBarShowLabel: false,
            tabBarStyle:{backgroundColor:'#043927', height:60, borderTopLeftRadius:20, borderTopRightRadius:20},
            tabBarInactiveTintColor: '#fff',
            tabBarActiveTintColor:'green'
            
            }
        }
        >
         
                <Tab.Screen name="HomeScreen2" component={HomeScreen} 
          options={{
            
            tabBarIcon: ({color, size}) => (
                <Ionicons name="home-outline" color={color} size={size} 
    />)
          }}
          />
          <Tab.Screen name='Ride' component={RideDetails}
                        options={{
                            tabBarIcon: ({color, size}) => (
                                <Ionicons name="car-sport-outline" color={color} size={size} 
                    />)
                           }}
                       ></Tab.Screen>
          
          <Tab.Screen name='History' component={History}
             options={{
                tabBarIcon: ({color, size}) => (
                <MaterialIcons name='location-history' color={color} size={size}/>
                    )
               }}/>
          
               <Tab.Screen name='Messages' component={Messages}
             options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="message" color={color} size={size} 
        />)
               }}/>
                 <Tab.Screen name='Settings' component={Settings}
             options={{
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="settings-outline" color={color} size={size} 
        />)
               }}/>
                       
        <Tab.Screen  name='Rating' component={RatingScreen} options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons name="star-rate" color={color} size={size} 
        />)
               }}></Tab.Screen>
        </Tab.Navigator>
      );
}

export default TabNavigation

const styles = StyleSheet.create({})