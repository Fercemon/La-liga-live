import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function Logo() {
    return(
        <View style={styles.logoContainer}>
            <Text style={styles.liga}>La Liga</Text>
            <Text style={styles.live}>LIVE</Text>
        </View>
        
    )
}

export default Logo;

const styles = StyleSheet.create({
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 15,
    },

    liga: {
        fontSize: 25,
        fontWeight: 'bold'
    },

    live: {
        fontSize: 40,
        fontWeight: 'bold'
    }
})