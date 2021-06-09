import React,{component} from 'react'
import {StyleSheet,View,Text,TouchableOpacity, requireNativeComponent} from 'react-native'
import { DrawerItems } from 'react-navigation-drawer';
import firebase from 'firebase'
export default class CustomSideBarMenu extends component{
    render(){
        return(
            <View style = {styles.container}>
            <View style = {styles.DrawerItemscontainer}>
                <DrawerItems {...this.props}/>
            </View>
             <View style = {styles.logOutConatainer}>
                 <TouchableOpacity style = {styles.logoutButton}
                 onPress = {()=>{
                     this.props.navigation.navigate('WelcomeScreen')
                     firebase.auth().signOut()
                 }}>
                     <Text>Log Out</Text>
                 </TouchableOpacity>
             </View>
            <Text>
                Custom Side Bar Menu
            </Text>
            </View>

        )  
        
    }
}  