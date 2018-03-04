import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Text>This is Home Screen!</Text>
                <Button onPress={() => this.props.navigation.navigate('LoginSScreen')} title="Go to LoginScreen" />
            </View>
        );
    }
}