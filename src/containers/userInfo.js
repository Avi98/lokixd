
import React, { useEffect, useState } from "react";
import { Card, ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { StyleSheet, View, Text } from 'react-native';
import axios from 'axios';
import { ImageGallery } from '@nlabs/react-native-image-gallery';

const Gallery = (props) => {
    const { images } = props;
    const imageUrls = images.map((img) => ({
        url: img.uri,
        id: img.id,
        title: img.title,
        description: img.description
    })
    );
    return <ImageGallery images={imageUrls} />;

}
const UserInfo = props => {
    const [photos, setPhotos] = useState([])
  
    useEffect(() => {
        axios('https://api.unsplash.com/photos/', {
            headers: {
                Authorization: 'Client-ID b205b07b2bc8eab3c685fb4beb577a2f9d7d81aee9f50635305d040123a6b708'
            }
        }).then((res) => setPhotos(res.data))
    }, [])
    const { picture: { thumbnail }, name: { first, last }, email } = props.userData;
    const galleryData = photos.length > 0 &&  photos.map((obj) => {
        /**
         * {
         * uri,
         * id,
         * title,
         * description
         * }
         */

        return {
            uri: obj.urls.full,
            id: obj.id,
            title: obj.user.name,
            description: obj.alt_description
        }

    })
    debugger
    return (
        <View>
            <Card
                containerStyle={{ padding: 0 }}
            >
                <ListItem
                    title={`${first} ${last}`}
                    subtitle={email}
                    leftAvatar={{ source: { uri: thumbnail } }}
                    containerStyle={{ borderBottomWidth: 0 }}
                />
            </Card>
            <Gallery images={galleryData.length>0 ? galleryData : []} />

        </View>
    )


}

const mapStateToProps = (store) => ({
    userData: store.Search.userPressedData
})
export default connect(mapStateToProps, null)(UserInfo)