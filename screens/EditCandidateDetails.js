import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput, Button, Alert, Dimensions, ImageBackground } from 'react-native';
import { fire } from '../fire';
import firebase from 'firebase'



var enterdetails = (name, kulliyah, matric, manifesto, manifesto2, manifesto3) => {
    fire.ref(`/candidate/${matric}`).update({
       name: name,
       kulliyah: kulliyah,
       manifesto: manifesto,
       manifesto2:manifesto2,
      manifesto3:manifesto3,
     });
   
   
   };

   const {width: WIDTH} = Dimensions.get('window')
class Vote extends Component {
   
   
    
     
    
    
  state={
      name:'',
      manifesto:'',
      manifesto2:'',
      manifesto3:'',
      matric:this.props.navigation.state.params.matric,
      kulliyah:'',
  }

  handleChangeName = e => {
    this.setState({
      name: e.nativeEvent.text
    });
  };
  handleChangeKulliyah = e => {
    this.setState({
      kulliyah: e.nativeEvent.text
    });
  };
  
  handleChangeManifesto = e => {
    this.setState({
      manifesto: e.nativeEvent.text
    });
    
  };
  handleChangeManifesto2 = e => {
    this.setState({
      manifesto2: e.nativeEvent.text
    });
    
    
  };
  handleChangeManifesto3 = e => {
    this.setState({
      manifesto3: e.nativeEvent.text
    });
    
    
  };
  
  handleSubmit = () => {
    enterdetails(this.state.name, this.state.kulliyah, this.state.matric, this.state.manifesto, this.state.manifesto2, this.state.manifesto3);
    Alert.alert('Details of Candidate successfully updated');
    
  };

  
    render() {
       
        
        return (
          <ImageBackground source={require('../orange.jpg')} style={{width: '100%', height: '100%'}}>
    <View style={styles.container}>
    
        <TextInput 
        style={styles.itemInput}
        onChange={this.handleChangeName}
        placeholder='Enter name...'
         />
         <Text></Text>
         <TextInput 
        style={styles.itemInput}
        onChange={this.handleChangeKulliyah}
        placeholder='Enter Kulliyah...'
         />
         <Text></Text>
        <TextInput 
        style={styles.itemInput}
        onChange={this.handleChangeManifesto}
        placeholder='Enter Manifesto...'
         />
          <Text></Text>
        <TextInput 
        style={styles.itemInput}
        onChange={this.handleChangeManifesto2}
        placeholder='Enter Manifesto...'
         />
          <Text></Text>
        <TextInput 
        style={styles.itemInput}
        onChange={this.handleChangeManifesto3}
        placeholder='Enter Manifesto...'
         />
        <Text></Text>
        <View style={{marginLeft:75, marginRight:75}}>
        <Button 
        
        title='Update'
        onPress={this.handleSubmit}
        color='black'
        
        />
        <Text></Text>
        </View>
        
        
    
    </View>
    </ImageBackground>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
         
     
    },
    itemInput: {
        width: WIDTH - 55,
           height: 45,
           
           fontSize: 16,
           paddingLeft: 45,
           backgroundColor: 'rgba(0,0,0,0.35)',
           color: 'rgba(255,255,255,0.7)',
           marginHorizontal: 25
    }
});

//make this component available to the app
export default Vote;