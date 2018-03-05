import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';

class LoginScreen extends Component {
    render() {
        return (
            <View>
            <Text>This is Login Screen!</Text>
            <Button onPress={() => this.props.navigation.navigate('AboutSScreen')} title="Go to AboutScreen" />
        </View>
        )
    }
}

class LoginUserName extends Component {
    render() {
        return (
            <View>
                <Text>This is Login User Name</Text>
            </View>
        )
    }
}

class LoginPassword extends Component {
    render() {
        return(
            <View>
                <Text>This is Login Password</Text>
            </View>
        )
    }
}

const TabNavigatorScreen = TabNavigator({
    LoginSScreen: {screen: LoginScreen},
    LoginUserName: {screen: LoginUserName},
    LoginPassword: {screen: LoginPassword}
})

export default TabNavigatorScreen;