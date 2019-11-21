import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export const Gallery = (props) => {
    return <View style={style.container}>{
        props.images.map((img) => <Image source={{ uri: img.uri }} style={style.imgBox} />)
    }
    </View>;

}

const style = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 10,
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    imgBox: { width: 250, height: 250, padding: 15 }
})