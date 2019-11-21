import React,{useEffect} from 'react';
import Search from './flatlist';
import UserInfo from './userInfo';
// import UserGallery from './UserGallery';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import { updateScreenPosition } from '../actions/updateScreen/updateScreen';

const RenderScreen = (name) => {
    switch(name){
        case 'Search': return Search ;
        case 'UserInfo': return UserInfo;
        // case 'UserGallery': return UserGallery;
        default: return Search 
    }
}
const ScreenRoutes = (props) => {
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
    },[])

    function handleBackButtonClick(){
        const currentScreenIndex= props.currentScreenPosition;
        if(currentScreenIndex - 1 === 0){
            props.updateScreenPosition({name:'Search', position:0})
        }
        if(currentScreenIndex - 1 === 1){
            props.updateScreenPosition({name:'UserInfo', position:0})
        }
    }
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
export default connect(mapStateToProps,{updateScreenPosition})(ScreenRoutes)