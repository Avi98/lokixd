import React, { Component } from "react";
import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
    SafeAreaView
} from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import { getUsers } from "../api/index";
import { connect } from 'react-redux'
import {userData} from "../actions/search"

class SearchUsers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            error: null,
            search: ""
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        this.setState({ loading: true });

        getUsers()
            .then(users => {
                
                this.props.userData(users)
                this.setState({
                    loading: false,
                    data: users
                });
            })
            .catch(error => {
                this.setState({ error, loading: false });
            });
    };

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "14%"
                }}
            />
        );
    };

    updateSearch = (search) => this.setState({ search }, this.filterSearchResult)

    filterSearchResult = () => {
        const dataCpy = [...this.state.data]
        const newSearchData = dataCpy.filter(obj => obj.name.first.includes(this.state.search))
        this.setState({ data: this.state.search ? newSearchData : this.props.data })
    }
    renderHeader = () => {
        return <SearchBar placeholder="Type Here..." lightTheme round onChangeText={this.updateSearch} value={this.state.search} />;
    };

    renderFooter = () => {
        if (!this.state.loading) return null;

        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: "#CED0CE"
                }}
            >
                <ActivityIndicator animating size="large" />
            </View>
        );
    };

    render() {
        return (
            <SafeAreaView>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <ListItem
                            title={`${item.name.first} ${item.name.last}`}
                            subtitle={item.email}
                            leftAvatar={{ source: { uri: item.picture.thumbnail } }}
                            containerStyle={{ borderBottomWidth: 0 }}
                        />
                    )}
                    keyExtractor={item => item.email}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                />
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (store) => ({
    data: store.data
})

export default connect(mapStateToProps, {userData})(SearchUsers);