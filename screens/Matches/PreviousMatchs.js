import React from 'react';
import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import firebase from '../../firebase';
import Match from '../../components/Match';

export default class PrevioustMatches extends React.Component {

    //Set matches and shields states with empty object to retrive
    state = {
        matches:{},
    }

    //Create teamDatabase variable and store the path that point on our database we want to get the info from
    teamsDatabase = firebase.database().ref('matches/Previous');

    componentDidMount(){
        //When the database have data,
        // we get the snapchot value with the data and  retrive it to our state matches
        this.teamsDatabase.once('value', snapshot => {
            const teamsJson = snapshot.val();
            this.setState({matches: teamsJson});
        })
    }
    render() {
        return(
            <ScrollView>
                <Text style={styles.heading}>Previous Matches</Text>
                {
                    //Our state is a object in this point
                    //Use Object.keys to convert it in to an array
                    //Use .map to loop through the array and get the specific wanted info
                    Object.keys(this.state.matches).map((match, index) => //Remember to set key=index to the conatiner element
                    //Set the database info into our component props to display the wanted info
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