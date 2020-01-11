import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableHighlight, ActivityIndicator, FlatList,Alert, ImageBackground } from 'react-native';
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

handleDelete = (matric) => {
    fire.ref(`/candidate/${matric}`).remove();
}
 
  

  render() {
    return (
      <ImageBackground source={require('../orange.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
       
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
          <Text style={styles.itemtext} >Name : {item.name}</Text>
          <Text style={styles.itemtext}>Kulliyah : {item.kulliyah}</Text>
           <Text style={styles.itemtext}>Matric : {item.matric}</Text>
           <Text style={styles.itemtext}>Manifesto : {item.manifesto}</Text>
          <View style={styles.fixToText}>
          
          
                            </View>
                            <Text></Text>
                            <View style={{marginLeft:75, marginRight:75}}>
                            <Button title='Edit Candidate Details' color='black' onPress={() => this.props.navigation.navigate('EditCandidateDetails',{
            name: item.name,
            manifesto: item.manifesto,
            manifesto2: item.manifesto2,
            manifesto3: item.manifesto3,
            key: item.key,
            vote:item.vote,
            matric:item.matric,
            kulliyah:item.kulliyah
          })}/>
                            <Text></Text>
                            <Button 
            color='black'
            title='Delete Candidate'
            onPress={() => Alert.alert(
            'Are you sure',
            'You want to delete this candidate?',
            [
              {text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
              {text: 'YES', onPress: () => {this.handleDelete(item.matric)}},
            ]
          )}
            
            
            />
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