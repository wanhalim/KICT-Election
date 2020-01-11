import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {fire} from '../fire';
import firebase from 'firebase'

let itemsRef = fire.ref('/candidate1/votes');
let userRef = fire.ref('/users')

let askquestion = item => {
 
  fire.ref('/users/'+ firebase.auth().currentUser.uid).on("value", data => {
    let updatedVote = data.val().voted;
    if(data.val().voted < 1){
      fire.ref('/candidate3/votes').update({
        vote: item
      }, () => {
          fire.ref('/users/'+ firebase.auth().currentUser.uid).update({
            voted: updatedVote+1
          })
      });
     
    }
  })
 

};


class Candidate3 extends Component {
  constructor () {
    super ();
    this.state= {
      vote: 0,
      done:false,
      error:'',
      loading:false
      
    }
  }

  componentDidMount() {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      let vote = Object.values(data);
      this.setState({ vote });
    });
    fire.ref('/users/'+ firebase.auth().currentUser.uid).on("value", data => {
     
      if(data.val().voted == 1){
        this.setState({ loading: false, done: true });
       
      }
    })
  }
  
  
  renderButtonOrDone(){
    if(this.state.done){
      return  <Text>You have already voted !</Text>
    }
    return <View>
      <Button 
        
        title='vote'
        onPress={() => Alert.alert(
        'Are you sure',
        'You want to vote this candidate?',
        [
          {text: 'NO', onPress: () => console.warn('NO Pressed'), style: 'cancel'},
          {text: 'YES', onPress: () => {this.handleSubmit()}},
        ]
      )}
        color='#065C50'
        
        />
      
    </View>
  }


  handleSubmit = () => {
  askquestion(this.state.vote++);
  askquestion(this.state.vote++);
  this.setState({ loading: false, done: true });
  
  }

  

  render() {
   
    return (
      <View style={styles.contoh}>

<View >
        <Text>SRC candidate 3</Text>
        
        <Text></Text>
        
        
        <Text></Text>
</View>

        <View>
       {this.renderButtonOrDone()}
        <Text></Text><Text></Text><Text></Text>

        </View>


      </View>
    );
  }

}

const styles = StyleSheet.create({
contoh: {
  flex:1,
backgroundColor: 'lightblue'

},
style1: {
  flex:1,
  backgroundColor: 'green'
}




})

export default Candidate3;