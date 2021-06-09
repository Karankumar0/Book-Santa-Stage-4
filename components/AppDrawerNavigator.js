import React from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {AppTabNavigator} from './AppTabNavigator'
import CustomSideBarMenu from './CustomSideBarMenu'
export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        Screen:AppTabNavigator
    },

    ContentComponent:CustomSideBarMenu,
    initialRouteName:'Home'
   })