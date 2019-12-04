import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import Highlight from '../../components/Highlight';

export default class HighlightScreen extends Component {

    //to get current user 
    render() {
        return (
                <ScrollView contentContainerStyle={styles.container}>
                    <Text style={styles.title}>GAMES HIGHLIGHTS</Text>
                    <View style={styles.highlightContainer}>
                        <Highlight></Highlight>
                    </View>
                </ScrollView> 
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },

    highlightContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20,
    }
})