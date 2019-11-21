import React from 'react';
import Search from './flatlist';
import { connect } from 'react-redux';
import { StyleSheet, View , Text} from 'react-native';


const Test = () => <View><Text>userInfo</Text></View>
const UserG = () => <View><Text>UserG</Text></View>
const RenderScreen = (name) => {
    switch(name){
        case 'Search': return Search ;
        case 'UserInfo': return Test
        case 'UserGallery': return UserG
        default: return Search 
    }
}
const ScreenRoutes = (props) => {
    debugger
    const Comp = RenderScreen(props.screen.currentScreenName)
    return (
        <Comp />
    )
}
const mapStateToProps = (store) => {
    return {
        screen: store.Screen
    }
}
export default connect(mapStateToProps)(ScreenRoutes)