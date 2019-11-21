import React from 'react';
import Search from './flatlist';
import UserInfo from './userInfo';
import { connect } from 'react-redux';


const RenderScreen = (name) => {
    switch(name){
        case 'Search': return Search ;
        case 'UserInfo': return UserInfo;
        // case 'UserGallery': return UserGallery;
        default: return Search 
    }
}
const ScreenRoutes = (props) => {
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