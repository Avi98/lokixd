import React from 'react';
import Search from './flatlist';
import { connect } from 'react-redux';

const RenderScreen = (name) => {
    switch(name){
        case 'Search': return <Search />
        default: return Search 
    }
}
const ScreenRoutes = (props) => {
    const Comp = RenderScreen(props.currentScreenName)
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