import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class HomeStudent extends Component {

render() {
        return(
          <View>
          <Text>SRC Candidates:</Text>
          <Button title = "View Candidates" onPress={() => this.props.navigation.navigate('Candidate')} />
          </View>
        );
  }
  
}

export default HomeStudent;