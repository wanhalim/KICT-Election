import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput, Button, Alert, ImageBackground } from 'react-native';
import { fire, app } from '../fire';
import firebase from 'firebase'
import {Icon} from 'react-native-elements'




let askquestion = (item, matric) => {
    fire.ref('/users/'+ firebase.auth().currentUser.uid).on("value", data => {
        let updatedVote = data.val().voted;
        if(data.val().voted < 1){
          fire.ref(`/candidate/${matric}`).update({
            vote: item
          }, () => {
              fire.ref('/users/'+ firebase.auth().currentUser.uid).update({
                voted: updatedVote+1
              })
          });
         
        }
      })
  };

 
class Vote extends Component {
   
   
    
      componentDidMount() {
    const matric= this.state.matric;

        fire.ref(`/candidate/${matric}`).on('value', snapshot => {
            let data = snapshot.val().vote;
            
            this.setState({ vote: data });
          }); 
    
        
        fire.ref('/users/'+ firebase.auth().currentUser.uid).on("value", data => {
         
          if(data.val().voted == 1){
            this.setState({ loading: false, done: true });
           
          }
        })
      }
      
      renderButtonOrDone(){
        if(this.state.done){
          return  <View style={{flexDirection:'row', justifyContent:'center'}}>
          <Text style={{textAlign:'center', fontSize: 20, fontWeight: 'bold'}}>You have already voted !</Text> 
          <Icon
  name='clear'/>
       </View> }
        return <View>
          
          <Button 
            
            title='vote'
            onPress={() => Alert.alert(
            'Lock Vote?',
            'Remember you can only vote once!',
            [
              {text: 'NO', style: 'cancel'},
              {text: 'YES', onPress: () => {this.handleSubmit()}},
            ]
          )}
            color='black'
            
            />
          
        </View>
      }
    
    signOut = () => {
      app.auth().signOut()
      this.props.navigation.navigate('Home')
    }


  state={
      vote:'',
      name:this.props.navigation.state.params.name,
      manifesto:this.props.navigation.state.params.manifesto,
      manifesto2:this.props.navigation.state.params.manifesto2,
      manifesto3:this.props.navigation.state.params.manifesto3,
      key:this.props.navigation.state.params.key,
      matric:this.props.navigation.state.params.matric,
          done:false,
          error:'',
          loading:false
  }

  handleSubmit = () =>{
    
    askquestion(this.state.vote++, this.state.matric);
    askquestion(this.state.vote++, this.state.matric);
    // const a = askquestion(5, this.state.name);

    // Alert.alert(`Thank you for voting ${a}`);

  }

    render() {
        // const { navigation } = this.props;

        // const name = navigation.getParam('name');
        // const vote = navigation.getParam('vote');
        // const manifesto = navigation.getParam('manifesto');
        // const key = navigation.getParam('key')
        
        return (
          <ImageBackground source={require('../orange.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={{flex:1}}>
            <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
    <View style={styles.container}>
        <Text>Name: {this.state.name}</Text>
        <Text>Manifesto 1: {this.state.manifesto}</Text>
        <Text>                   2: {this.state.manifesto2}</Text>
        <Text>                   3: {this.state.manifesto3}</Text>
        <Text></Text>
        <Text></Text>
        {this.renderButtonOrDone()}
    </View>
    <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
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
    </View>
    </ImageBackground>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
       
        justifyContent: 'center',
         padding:30,
         elevation:8,borderRadius:15, backgroundColor:'transparent'
        
    },
});

//make this component available to the app
export default Vote;