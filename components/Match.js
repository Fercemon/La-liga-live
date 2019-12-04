import React from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native'

export default class Match extends React.Component {
    render() {
        return(
                //The component will be used in different class components
                //Each of this class components will give different properties to this component
                //That's why we have to set the info to display as props 
                <View style={styles.container}>
                    <View style={styles.teams}>
                        <Image source={{uri: this.props.shield1}} style={styles.shields}></Image>
                        <Text style={styles.text}>{this.props.team1}</Text>
                    </View>
                    <View style={styles.teams}>
                        <Text style={styles.text}>La liga</Text>
                        <Text style={styles.text}>{this.props.result}</Text>
                    </View>
                    <View style={styles.teams}>
                        <Image source={{uri: this.props.shield2}} style={styles.shields}></Image>
                        <Text style={styles.text}>{this.props.team2}</Text>
                    </View>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: 20,
    },

    teams:{
        width: '33%',
    },

    text: {
        textAlign: 'center',
        marginTop: 10
    },

    shields: {
        width: 'auto',
        height: 50,
        resizeMode: 'contain'
    }
})