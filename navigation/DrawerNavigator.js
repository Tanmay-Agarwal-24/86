import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import  TabNavigator  from './TabNavagator';
import  Profile from '../screens/Profile';
const Drawer =createDrawerNavigator();
export const DrawerNavigator=()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={TabNavigator}/>
             <Drawer.Screen name='Profile' component={Profile}/>
        </Drawer.Navigator>
    );
};
