import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableHighlight, ActivityIndicator, FlatList, ImageBackground } from 'react-native';
import PropTypes, { func } from 'prop-types';



import { fire } from '../fire'
import { ScrollView } from 'react-native-gesture-handler';



export default class App extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired
  };

  state = {
    items: []
  };

  componentDidMount() {
    fire.ref('/candidate').on('value', snapshot => {
      let data = snapshot.val();
      let items = Object.values(data)
     
      this.setState({ items });
      console.log(this.state.items);
    });
  }

  

  render() {
    return (
      <ImageBackground source={require('../orange.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
        <Text>Votes of candidates</Text>
        <Text></Text>
        
        {
      this.props.loadingReducer ? <ActivityIndicator size="large" color="#00ff00" /> : 
      <FlatList style={{width:'100%'}} 
        data={this.state.items}
       keyExtractor={(item) => item.key}
         showsVerticalScrollIndicator={false}
         renderItem={({item}) => 
           
         {
           return (
          <View style={{elevation:8, marginBottom:15,borderRadius:15, backgroundColor:'transparent', padding:20}}>
          <Text></Text>                       
          <Text style={styles.itemtext} >    Name : {item.name}</Text>
           <Text style={styles.itemtext}>    Matric : {item.matric}</Text>
           <Text style={{marginLeft:110, fontSize:22, fontStyle:'italic', fontWeight:'bold'}}>    Votes : {item.vote}</Text>
          <View style={styles.fixToText}>
          
                            </View>
                            </View>
                         )
          }}
         />
                }
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 150
  }
});