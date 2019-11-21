import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export const Gallery = (props) => {
    return <ScrollView contentContainerStyle={style.container}>
        {
            props.images.map((img) =>
                <TouchableOpacity
                onPress={() => props.setToGallery(img)}
                >
                    <Image source={{ uri: img.uri }} style={style.imgBox} />

                </TouchableOpacity>
            )

        }
    </ScrollView>

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
    imgBox: { width: 150, height: 150, padding: 15 }
})