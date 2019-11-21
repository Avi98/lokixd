
import React, { useEffect, useState } from "react";
import { Card, ListItem } from "react-native-elements";
import { connect } from "react-redux";
import {  View } from 'react-native';
import axios from 'axios';
import { Gallery } from "../components/Gallery";
import { updateScreenPosition, setToGallery } from "../actions/updateScreen/updateScreen";

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
    const galleryData = photos.length > 0 && photos.map((obj) => {
        return {
            uri: obj.urls.full,
            id: obj.id,
            title: obj.user.name,
            description: obj.alt_description
        }

    })
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
            <Gallery images={galleryData.length > 0 ? galleryData : []} setToGallery={props.setToGallery} />

        </View>
    )


}

const mapStateToProps = (store) => ({
    userData: store.Search.userPressedData
})
export default connect(mapStateToProps, {setToGallery})(UserInfo)