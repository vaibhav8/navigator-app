import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class LoginScreen extends Component {
    render() {
        return (
            <View>
            <Text>This is Login Screen!</Text>
            <Button onPress={() => this.props.navigation.navigate('AboutSScreen')} title="Go to AboutScreen" />
        </View>
        )
    }
}