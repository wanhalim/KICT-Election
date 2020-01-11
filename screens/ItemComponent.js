import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, Button, Alert, ScrollView, FlatList, Image } from 'react-native';
import PropTypes, { func } from 'prop-types';
import fire from '../fire';
import firebase from 'firebase';

const {width: WIDTH} = Dimensions.get('window')








export default class ItemComponent extends Component {
 
 
 
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    
    return (
      <ScrollView>
      <View style={styles.itemsList}>
        {this.props.items.map((item, index) => 
        
        { 
          return (
            <View key={index} style={{elevation:8, marginBottom:15, marginLeft:10, marginRight:10,borderRadius:15, backgroundColor:'#065C50', padding:20}}>
          
          <Text style={styles.itemtext} >    Name : {item.name}</Text>
          <Text style={styles.itemtext}>    Kulliyah : {item.kulliyah}</Text>
          <Text style={styles.itemtext}>    Matric : {item.matric}</Text>
          <Text style={styles.itemtext}>    Manifesto : {item.manifesto}</Text>
          <View style={styles.fixToText}>
          <Button title='Manifesto' onPress={() => this.props.navigation.navigate('C1',{...item})}/>
            </View>
            </View>
                 );
          
          
        }
        )
        }
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  itemsInput: {
    width: WIDTH - 55,
       height: 45,
       
       fontSize: 16,
       paddingLeft: 45,
       backgroundColor: 'rgba(0,0,0,0.35)',
       color: 'rgba(255,255,255,0.7)',
       marginHorizontal: 25
    
    
    
  },
  itemsList: {
    flex: 1,
    
 
    
    
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 250
  }
  
});
