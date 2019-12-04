import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Item, Form, Input, Button, Label } from "native-base";
import firebase from '../firebase';

import Logo from '../components/Logo';

export default class SignupScreen extends Component {
    static navigationOptions = ({ navigation }) => ({ // to set the title of the header
        title: "Signup",
    });
    
    state = {name: '', email: '', password: '', errorMessage: null }

    

    handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                firebase.auth().currentUser.updateProfile({
                    displayName: this.state.name,
                }).then(() => {
                    firebase.database().ref(`users/${firebase.auth().currentUser.uid}`).set({
                        name: firebase.auth().currentUser.displayName,
                    });
                }).catch(errorHandler);
            })
            .then(() => this.props.navigation.navigate('App'))
            .catch(error => this.setState({ errorMessage: error.message }));
    }

    render() {
        return (
            <View style={styles.container}>
                <Logo></Logo>
                <Form>
                <Item floatingLabel>
                        <Label>Name</Label>
                        <Input
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={name => this.setState({ name })}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={email => this.setState({ email })}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input
                            secureTextEntry={true}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={password => this.setState({ password })}
                        />
                    </Item>
                    <Button onPress={this.handleSignUp} full rounded primary style={{ marginTop: 20 }}>
                        <Text>Signup</Text>
                    </Button>                   
                    <Text style={{fontSize: 18, textAlign: 'center', width: '100%', marginTop:20}}>Alredy have an Account?
                        <Text style={{color: '#2196F3'}} onPress={() => this.props.navigation.navigate('Login')}> Login</Text>
                    </Text>
                </Form>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 100,
        justifyContent: "flex-start"

    },
})
