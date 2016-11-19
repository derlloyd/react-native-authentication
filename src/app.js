import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCjhbr9ejH8RdlEcT3Vyko4DFpY1wxo-WE',
            authDomain: 'authentication-de1ab.firebaseapp.com',
            databaseURL: 'https://authentication-de1ab.firebaseio.com',
            storageBucket: 'authentication-de1ab.appspot.com',
            messagingSenderId: '16856054966'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
