import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import Home from '../screens/Home';
import Map from '../screens/Map';
import Music from '../screens/HomeScreen';
import Login from './LonginNavigator';
import { Ionicons,
    Entypo,
    MaterialCommunityIcons,
    FontAwesome5, FontAwesome  } from '@expo/vector-icons';

const Tab=createBottomTabNavigator()
const AppNavigator = () => {
    return (<Tab.Navigator>
       
        <Tab.Screen name='Map' component={Map} 
            options={{
                tabBarIcon: ({ color }) => <MaterialCommunityIcons name="google-maps" size={30} style={{ marginBottom: -3 }} color="#2196F3" />,
              }}
        />
        <Tab.Screen name='Spotify' component={Login} 
        options={{          
            
            tabBarIcon: ({ color }) => <FontAwesome5 name="spotify" size={30} style={{marginBottom: -3}} color="#4CAF50" />,
          }}
        
        />
    </Tab.Navigator>
    ); 
};

export default AppNavigator;