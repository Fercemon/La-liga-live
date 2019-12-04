import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import RankingTbl from '../../components/RankingTbl';


export default class RankingScreen extends Component {


    //to get current user 
  
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>LA LIGA RANKING</Text>
                <RankingTbl></RankingTbl>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20,
    }
})