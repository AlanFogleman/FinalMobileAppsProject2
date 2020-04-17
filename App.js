// Import the screens
import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import Chat from './components/Chat';
// Import React Navigation
import { createStackNavigator, StackNavigator } from 'react-navigation'; 

export class HomeScreen extends Component {

    render() {
        return (
            <View style={{
            flex: 1,
            flexDirection: 'column',
            }}> 
            <View style={{
                flex: 1,
                backgroundColor: '#4885ed',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 36, color: 'white' }}>
                Chatster!
                </Text>
                <TouchableHighlight style={{ 
                                            margin: 20, 
                                            width: 200, 
                                            height: 45,
                                            backgroundColor: 'darkblue',
                                            padding: 10,
                                            alignItems: 'center',
                                         }}
                    onPress={() => {this.props.navigation.navigate('Login');                                             
                    }}>
                    <Text style={{color: 'white', fontSize: 18}}>Hello!</Text>
                </TouchableHighlight>
            </View>
        </View>);
    }
}

// Create the navigator
const navigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen},
  Login: { screen: Login },
  CreateAccount: { screen: CreateAccount },
  Chat: { screen: Chat },
});

// Export it as the root component
export default navigator
