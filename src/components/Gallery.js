import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export const Gallery = (props) => {
    return <ScrollView contentContainerStyle={style.container}>
 
        {
            props.images.map((img) =>
                <TouchableOpacity
                // onPress={() => onSelect(id)}
                // style={[
                //     styles.item,
                //     { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
                // ]}
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
    imgBox: { width: 250, height: 250, padding: 15 }
})