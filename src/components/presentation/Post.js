import React, { Component } from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

import config from '../../config';

export default class Post extends Component {

    constructor() {
        super();
        this.state = {
            screenWidth: Dimensions.get("window").width,
            liked:false,
        }
    }

    likedToggle(){
        this.setState({
            liked: !this.state.liked
        });
    }

    render() {
        const imageHeight = Math.floor(this.state.screenWidth * 0.9);
        const heartColor = this.state.liked? 'rgb(251,61,57)':null;
        const puppy1 = "https://assets3.thrillist.com/v1/image/2754967/size/tmg-article_tall;jpeg_quality=20.jpg";
        const puppy2 ="https://www.scamwatch.gov.au/sites/default/files/Puppy%2520Scam%252002_0.jpg";
        const puppy = (this.props.item%2==0)?puppy1:puppy2;

        return (
            <View >
                <View style={styles.userBar}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            style={styles.userAvatar}
                            source={{ uri: 'avatar' }}>
                        </Image>
                        <Text style={{ marginLeft: 10 }}>EvangelineWong</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.more}>
                            ...
                        </Text>
                    </View>
                </View>
                <TouchableOpacity 
                   activeOpacity={0.7}
                   onPress ={
                    ()=>{
                        this.likedToggle();
                    }
                }>
                    <Image style={{ width: '100%', height: 360 }}
                        source={{
                            //  uri: "https://assets3.thrillist.com/v1/image/2754967/size/tmg-article_tall;jpeg_quality=20.jpg"
                            uri : puppy
                        }} />
                </TouchableOpacity>
                <View style={styles.iconBar}>
                    <Image
                        style={{ width: 32, height: 32 ,tintColor:heartColor}}
                        source={config.images.heartIcon}>
                    </Image>
                    <Image
                        style={{ width: 32, height: 32, marginLeft: 10 }}
                        source={config.images.chatIcon}>
                    </Image>
                    <Image
                        style={{ width: 32, height: 32, marginLeft: 10 }}
                        source={config.images.arrowIcon}>
                    </Image>
                </View>
                <View style={styles.commentBar}>
                    <Image
                        style={{ width: 18, height: 18 }}
                        // source={{ uri: 'heart_black' }}
                        source={config.images.heartBlackIcon}
                        >
                    </Image>
                    <Text style={{ marginLeft: 2, fontWeight: 'bold' }}> 128</Text>
                    <Text style={{ marginLeft: 5, fontWeight: 'bold' }}> likes </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    userBar: {
        width: '100%',
        height: config.styleConstants.rowHeight,//50,
        backgroundColor: 'rgb(255,255,255)',
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: 'space-between',//in order to set children int both end
    },
    userAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    more: {
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily: 'Cochin',
    },
    iconBar: {
        width: '100%',
        height: config.styleConstants.rowHeight,
        flexDirection: 'row',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: 'rgb(233,233,233)',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    commentBar:{
        width: '100%',
        height: config.styleConstants.rowHeight,
        flexDirection: 'row',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: 'rgb(233,233,233)',
        alignItems: 'center',
        paddingHorizontal:10,
    }
});


