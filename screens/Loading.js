import React, {Component} from 'react';
import {View, Text, TouchableHighlight, Button} from 'react-native';
import { app, fire } from '../fire';

let userRef = fire.ref('/users');

export default class Loading extends Component {
    constructor(props){
        super(props);
        this.state = {
            voted:null
        }
    }


    //TO DO
    // check if users voted or not. if yes logout session, no navigate to candidate screen
    componentDidMount(){
        const {currentUser} = app.auth();
        let query = userRef
        query.on('value', (snapshot)=>{
            let data = snapshot.val();
            if(data){
                let firebaseData = Object.values(data);
                this.setState({voted:firebaseData})
                console.log(this.state.voted)
            }
        })
    }


    render(){
        return(
            <View>
                <Text>Test</Text>
                <Text></Text><Text></Text><Text></Text>
                <TouchableHighlight style={{backgroundColor:'pink', alignItems:'center'}}
                onPress={()=>this.props.navigation.navigate('Candidate')}><Text>go to candidate</Text></TouchableHighlight>
                <Text></Text><Text></Text><Text></Text>
                <TouchableHighlight style={{backgroundColor:'pink', alignItems:'center'}}
                onPress={()=>app.auth().signOut(),()=>this.props.navigation.navigate('Home')}><Text>log out</Text></TouchableHighlight>
               <Text></Text><Text></Text><Text></Text>
                <TouchableHighlight style={{backgroundColor:'pink', alignItems:'center'}}
                onPress={()=>this.props.navigation.navigate('EnterDetails')}><Text>enter details </Text></TouchableHighlight>
                 <Text></Text><Text></Text><Text></Text>
                 <TouchableHighlight style={{backgroundColor:'pink', alignItems:'center'}}
                onPress={()=>this.props.navigation.navigate('Data')}><Text>data student </Text></TouchableHighlight>
            </View>
        )
    }
}