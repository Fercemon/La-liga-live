import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Item, Form, Input, Button, Label} from "native-base";
import firebase from '../firebase';

import Logo from '../components/Logo';

export default class LoginScreen extends Component {
    
    state = { email: '', password: '', errorMessage: null }

    handleLogin = () => {
        const { email, password } = this.state
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('App'))
            .catch(error => this.setState({ errorMessage: error.message }))
    }

    render() {

        return (
            <View style={styles.container}>
                <Logo></Logo>
                <Form>
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
                    <Button onPress={this.handleLogin} full rounded primary style={{ marginTop: 20 }}>
                        <Text>Login</Text>
                    </Button>
                    <Text style={{fontSize: 18, width:'100%', textAlign:'center', marginTop:20}}>Alredy have an Account?
                        <Text style={{color: '#2196F3'}} onPress={() => this.props.navigation.navigate('Signup')}> Signup</Text>
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
