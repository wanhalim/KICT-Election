import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions,Image, ActivityIndicator, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import fire from '../fire';
import firebase from 'firebase'
import { stringLiteral } from '@babel/types';




class HomeScreen extends Component {

  constructor(props)
  {
    super(props);
    
    this.state = {email:'', password:'', error:'', loading:false, authenticated: false};
    
  }

  onLoginPress(){
    this.setState({error:'', loading:true});
  
    const{email, password} = this.state;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      this.setState({error:'', loading:false});
      this.props.navigation.navigate('Data');
    })
    .catch(() =>{
      this.setState({error:'Authentication failed', loading:false})
    })
  
  }
  
  renderButtonOrLoading(){
    if(this.state.loading){
      return  <ActivityIndicator size="large" color="#00ff00" />
    }
    return <View>
      <Button 
      title="Sign In"
                   
      color='black'
        onPress={this.onLoginPress.bind(this)}>
        
      </Button>
      
    </View>
  }


render() {
  
        return(
        <ImageBackground source={require('../orange.jpg')} style={{width: '100%', height: '100%'}}>
          <View style={styles.all}> 
          <Text></Text><Text></Text>
            <Image style={styles.image} source={require('../KVS.png')}/>
            <Text style={{marginRight:50, marginLeft: 75, fontSize:20, fontWeight:'bold'}}>IIUM VOTING SYSTEM</Text>
            <View style={styles.home}>
<Text></Text>
<TextInput style={styles.login} 
   value = {this.state.email}
   onChangeText = {email => this.setState({email})}
   style= {styles.input}
   placeholder={'Email'}
   underlineColorAndroid='transparent'
/>
<Text></Text>
<TextInput style={styles.login} //style={{
           // marginTop:20, 
            //height:40, 
           // backgroundColor: 'rgba(0,0,0,0.35)', color:'white', fontFamily: 'monospace' 
           // }}
           value = {this.state.password}
           onChangeText = {password => this.setState({password})}
           style= {styles.input}
           placeholder={'Password'}
           secureTextEntry={true}

/>
          
          <Text>{this.state.error}</Text>
                       {this.renderButtonOrLoading()}
                     <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
                     <View style={{marginLeft: 250}}>
                     <Button title='I Am Admin' color='black' onPress={() => this.props.navigation.navigate('AdminAuth')}/>
                     </View>
                     </View>
          </View></ImageBackground>
        );
  }


}

const styles = StyleSheet.create({
  home: { 
    
    justifyContent:'center',

  },
  login: { 
     marginTop:20, 
     height:40, 
     margin: 50,
     backgroundColor: 'rgba(0,0,0,0.35)', color:'white', fontFamily: 'monospace', borderRadius: 20, borderWidth: 2
      },
  image :{
    height: 250,
    width: 250,
    marginLeft: 50,
    alignItems: 'center',
    justifyContent : 'center'
  },
  all: {
    flex: 1,
    padding: 20
    
  },
  input: {
    borderWidth:1
  }
})

export default HomeScreen;