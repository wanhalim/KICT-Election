import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableHighlight, ActivityIndicator, FlatList, ImageBackground, Image } from 'react-native';
import PropTypes, { func } from 'prop-types';
import { Icon } from 'react-native-elements';




import { fire } from '../fire'
import { ScrollView } from 'react-native-gesture-handler';



export default class DatabaseStudent extends Component {

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
         
          <Image style={styles.image} source={require('../profile.png')}/> 
           <Text></Text>
                      
          <Text style={styles.itemtext} >    Name : {item.name}</Text>
          <Text style={styles.itemtext}>    Kulliyah : {item.kulliyah}</Text>
           <Text style={styles.itemtext}>    Matric : {item.matric}</Text>
           
          <View style={styles.fixToText}>
          <Button  color='black'  title='Check Manifesto & Vote' onPress={() => this.props.navigation.navigate('Vote',{
            name: item.name,
            manifesto: item.manifesto,
            manifesto2: item.manifesto2,
            manifesto3: item.manifesto3,
            key: item.key,
            vote:item.vote,
            matric:item.matric
          })}/>
          <Icon
          onPress={() => this.props.navigation.navigate('Vote',{
            name: item.name,
            manifesto: item.manifesto,
            manifesto2: item.manifesto2,
            manifesto3: item.manifesto3,
            key: item.key,
            vote:item.vote,
            matric:item.matric
          })}
  name='check-box-outline-blank'/>
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
    marginLeft: 140,
    alignItems : 'center'
  },
  image :{
    height: 100,
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent : 'center'
  },
});