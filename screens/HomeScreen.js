import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen';
import AboutScreen from './AboutScreen';

class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Text>This is Home Screen!</Text>
                <Button onPress={() => this.props.navigation.navigate('LoginSScreen')} title="Go to LoginScreen" />
            </View>
        );
    }
}

const HSStackNavigator = StackNavigator({
    HomeSScreen: {screen: HomeScreen},
    LoginSScreen: {screen: LoginScreen},
    AboutSScreen: {screen: AboutScreen}
})

export default HSStackNavigator;