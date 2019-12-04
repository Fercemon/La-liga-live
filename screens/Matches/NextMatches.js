import React from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import firebase from '../../firebase';
import Match from '../../components/Match';

export default class NextMatches extends React.Component {

    //Set matches and shields states with empty object to retrive
    state = {
        matches:{},
    }

    teamsDatabase = firebase.database().ref('matches/Next');

    componentDidMount(){
        this.teamsDatabase.once('value', snapshot => {
            const teamsJson = snapshot.val();
            this.setState({matches: teamsJson});
        })
    }
    render() {
        return(
            <ScrollView>
            <Text style={styles.heading}>Next Matches</Text>
                {
                    Object.keys(this.state.matches).map((match, index) => 
                    <Match
                    key={index}
                    shield1={this.state.matches[match].shield1}
                    team1={this.state.matches[match].team1}
                    result={this.state.matches[match].result}
                    team2={this.state.matches[match].team2}
                    shield2={this.state.matches[match].shield2}></Match>
                    )
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 20
    }
})