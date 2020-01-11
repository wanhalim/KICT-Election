import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert, ImageBackground } from 'react-native';


export default class Vote extends Component {

    state = {
        code: ''
    }


    handleChangeCode = e => {
        this.setState({
          code: e.nativeEvent.text
        });
    };

    handleSubmit = () => {
        if (this.state.code == 123123){
            this.props.navigation.navigate('Admin')
        } else {
        return Alert.alert('Wrong Access Code')
    }
    }

    render () {
        return (
            <ImageBackground source={require('../orange.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={{flex:1, justifyContent:'center', padding:20}}>
                
                <Text style={{fontSize:20, fontWeight:'bold'}}>ENTER ACCESS CODE</Text>
                <Text></Text>
                <TextInput 
                style={{borderWidth:1}}
                placeholder='Enter Access Code Here...' onChange={this.handleChangeCode}/>
                <Text></Text>
                <View style={{marginLeft:100, marginRight:100}}>
                <Button title='SUBMIT' color='black' onPress={this.handleSubmit}/>
                </View>
            </View>
            </ImageBackground>
        )
    }
 }