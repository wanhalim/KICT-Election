import React, { Component } from 'react';
import {Text, View, Button, ImageBackground, Alert} from 'react-native';
import {Icon} from 'react-native-elements'


export default class App extends Component { 

    signOut = () => {
        this.props.navigation.navigate('Home')
      }
render () {
    return (
        <ImageBackground source={require('../orange.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={{flex:1}}>
            <Text></Text>
            <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
            <Button title='Enter A New Candidate' color='black' onPress={()=>this.props.navigation.navigate('EnterDetails')}/>
            <Text></Text>
            <Button title='Make Changes to Existing Candidate   ' color='black' onPress={()=>this.props.navigation.navigate('EditCandidate')}/>
            <Text></Text>
            <Button title='View Votes' color='black' onPress={()=>this.props.navigation.navigate('ViewVotes')}/>
        </View>
        <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
    <Icon name='input' reverse onPress={() => Alert.alert(
            'Are you sure',
            'You want to log out?',
            [
              {text: 'NO', style: 'cancel'},
              {text: 'YES', onPress: () => {this.signOut()}},
            ]
          )}/>
    </View>
        </ImageBackground>
    )
} 
}

