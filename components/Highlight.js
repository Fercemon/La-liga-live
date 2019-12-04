import React from 'react';
import {View, Text, StyleSheet, ScrollView, WebView, Platform} from 'react-native';
import firebase from '../firebase';

export default class Highlight extends React.Component {

    highlightDatabase = firebase.database().ref().child('highlights');

    state = {matchs: {}};

    componentDidMount() {
        this.highlightDatabase.once('value', snapshot => {
            const highlightJson = snapshot.val();

            this.setState({matchs: highlightJson});

            console.log(snapshot.val())
        });
    }

    render() {
        return(
                    Object.keys(this.state.matchs).map((match, index) =>
                        <View key={index} style={styles.container}>
                            <WebView
                                style={styles.WebViewContainer}
                                javaScriptEnabled={true}
                                source={{uri: `${this.state.matchs[match].video}?rel=0&autoplay=0&showinfo=0&controls=0&frameborder=0`}}
                            />
                            <Text style={styles.videoCaption}>{this.state.matchs[match].title}</Text>
                        </View>
            )
        )
    }
}

const styles=StyleSheet.create({
    container: {
        width: '47%',
    },

    WebViewContainer: {
        height: 130,
        marginTop: (Platform.OS == 'ios') ? 20 : 0,
      },

    videoCaption: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})