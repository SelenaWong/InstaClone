import React, { Component } from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    FlatList,
} from 'react-native';

import {PostFeed}  from './components/container';
import {Post} from './components/presentation';

export default class InstaClone extends Component {

    _keyExtractor = (item) => item.toString();

    _renderItem =({item}) =>(
        <Post item={item}></Post>
    );
    render() {
        return (
            <View style={{ flex: 1, width: '100%', height: '100%' }}>
                <View style={styles.topNav}>
                    <Text style={styles.topNavTxt}>Instagram</Text>
                </View>
                {/* <PostFeed/> */}
                <FlatList
                 data={[
                     1,
                     2,
                     3,
                     4,
                     5,
                     6,
                     7,
                     8,
                     9,
                     10
                 ]}
                 keyExtractor={this._keyExtractor}
                 renderItem ={this._renderItem }></FlatList>
            </View>
        )
    } 
}

const styles = StyleSheet.create({
    topNav: {
        width: '100%',
        height: 56,
        marginTop: 20,
        backgroundColor: 'rgb(250,250,250)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgb(233,233,233)',
        justifyContent: "center",
        alignItems: "center",
    },
    topNavTxt: {
        // fontSize:30,
        // fontStyle:"italic",
    },
});

