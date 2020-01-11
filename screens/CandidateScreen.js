import React, { Component } from 'react';
import {FlatList, StyleSheet, Text, View, Dimensions } from 'react-native';
import { Button, Icon,List, ListItem} from 'react-native-elements';
import { TextInput, ScrollView } from 'react-native-gesture-handler';

class CandidateScreen extends Component {

render() {
        return(
        
<ScrollView>
          <View style={styles.home}>
          <Text style={styles.title}>SRC Candidates</Text>
          <Text></Text><Text></Text>
            <View style={{elevation:8, marginBottom:15,borderRadius:15, backgroundColor:'#065C50', padding:20}}>
          <Text></Text>                       
          <Text style={styles.itemtext} >    Name :{'Ahmad Fethu Bin Ali'} </Text>
          <Text style={styles.itemtext}>    Kulliyah :{'KICT'} </Text>
          <Text style={styles.itemtext}>    Matric :{'1616544'} </Text>
          <View style={styles.fixToText}>
          <Button title='Check Manifesto & Vote' onPress={() => this.props.navigation.navigate('C1')}/>
                            </View>
                            </View>
                            <View style={{elevation:8, marginBottom:15,borderRadius:15, backgroundColor:'#065C50', padding:20}}>
          <Text></Text>                       
          <Text style={styles.itemtext} >    Name :{'Raziem Aiman bin Wahab'} </Text>
          <Text style={styles.itemtext}>    Kulliyah :{'KICT'} </Text>
          <Text style={styles.itemtext}>    Matric :{'1719987'} </Text>
          <View style={styles.fixToText}>
          <Button title='Check Manifesto & Vote' onPress={() => this.props.navigation.navigate('C2')}/>
                            </View>
                            </View>
                            <View style={{elevation:8, marginBottom:15,borderRadius:15, backgroundColor:'#065C50', padding:20}}>
          <Text></Text>                       
          <Text style={styles.itemtext} >    Name :{'Muhammad Kamirul bin Daud'} </Text>
          <Text style={styles.itemtext}>    Kulliyah :{'KICT'} </Text>
          <Text style={styles.itemtext}>    Matric :{'1629908'} </Text>
          <View style={styles.fixToText}>
          <Button title='Check Manifesto & Vote' onPress={() => this.props.navigation.navigate('C3')}/>
                            </View>
                            </View>
                            <View style={{elevation:8, marginBottom:15,borderRadius:15, backgroundColor:'#065C50', padding:20}}>
          <Text></Text>                       
          <Text style={styles.itemtext} >    Name :{'Nur Asiah binti Syafiq'} </Text>
          <Text style={styles.itemtext}>    Kulliyah :{'KICT'} </Text>
          <Text style={styles.itemtext}>    Matric :{'1617788'} </Text>
          <View style={styles.fixToText}>
          <Button title='Check Manifesto & Vote' onPress={() => this.props.navigation.navigate('C4')}/>
                            </View>
                            </View>
          
           
          </View>
          </ScrollView>
        );
  }
  
}




const styles = StyleSheet.create({
  home: { 
    backgroundColor : 'lightblue',
    justifyContent:'center',
    flex: 1
  },
  buton:{
    color : 'crimson'
  },
  title:{
    marginTop: 5,
    backgroundColor: 'crimson',
    fontWeight: 'bold', 
    fontSize : 20,
    width: 200
  },
  name:{
    marginTop: 5,
    backgroundColor: 'coral',
    fontSize : 15,
    width : 200
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 150
  }


})
export default CandidateScreen;