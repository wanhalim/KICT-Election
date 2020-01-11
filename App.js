import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import HomeScreen from './screens/HomeScreen'
import HomeStudent from './screens/HomeStudent'
import KuliyyahScreen from './screens/KuliyyahScreen'
import CandidateScreen from './screens/CandidateScreen.js'
import Loading from './screens/Loading';
import Candidate1 from './Candidates/Candidate1'
import Candidate2 from './Candidates/Candidate2'
import Candidate3 from './Candidates/Candidate3'
import Candidate4 from './Candidates/Candidate4'
import EnterDetails from './screens/EnterDetails'
import DatabaseStudent from './screens/DatabaseStudent'
import Vote from './screens/Vote'
import Admin from './screens/Admin'
import ViewVotes from './screens/ViewVotes'
import EditCandidate from './screens/EditCandidate'
import EditCandidateDetails from './screens/EditCandidateDetails'
import AdminAuth from './screens/AdminAuth'
import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
     header: null
    })
  },
  HomeStudent: {
    screen: HomeStudent,
    navigationOptions: () => ({
      headerTitle:"Blogs",
      
            headerStyle: {
                backgroundColor: 'black',
                
              },
    })
  },
  
  Loading:{
    screen: Loading,
    navigationOptions: () => ({
      headerTitle:"Blogs",
            headerStyle: {
                backgroundColor: 'black',
                
              },
    })
  },
  EnterDetails:{
    screen: EnterDetails,
    navigationOptions: () => ({
      headerTitle:"Add Candidate",
      headerTintColor: 'white',
            headerStyle: {
                backgroundColor: 'black',
                
              },
    })
  },
  Data:{
    screen: DatabaseStudent,
    navigationOptions: () => ({
      headerTitle:"Candidate List",
      headerTintColor: 'white',
            headerStyle: {
                backgroundColor: 'black',
                
              },
    })
  },
  Vote:{
    screen: Vote,
    navigationOptions: () => ({
      headerTitle:"Cast Your Vote",
      headerTintColor: 'white',
            headerStyle: {
                backgroundColor: 'black',
                
              },
    })
  },
  Admin:{
    screen: Admin,
    navigationOptions: () => ({
      headerTitle:"Admin",
      headerTintColor: 'white',
      headerLeft:null,
            headerStyle: {
                backgroundColor: 'black',
                
              },
    })
  },
  ViewVotes:{
    screen: ViewVotes,
    navigationOptions: () => ({
      headerTitle:"View Votes",
      headerTintColor: 'white',
            headerStyle: {
                backgroundColor: 'black',
                
              },
    })
  },
  EditCandidate:{
    screen: EditCandidate,
    navigationOptions: () => ({
      headerTitle:"Edit Candidate Details",
      headerTintColor: 'white',
            headerStyle: {
                backgroundColor: 'black',
                
              },
    })
  },
  EditCandidateDetails:{
    screen: EditCandidateDetails,
    navigationOptions: () => ({
      headerTitle:"Edit Candidate's Details",
      headerTintColor: 'white',
            headerStyle: {
                backgroundColor: 'black',
                
              },
    })
  },
  AdminAuth:{
    screen: AdminAuth,
    navigationOptions: () => ({
      headerTitle:"Admin",
      headerTintColor: 'white',
      justifyContent:'center',
            headerStyle: {
                backgroundColor: 'black',
                
              },
    })
    
  },

},
{ headerLayoutPreset:"center"}
  
);


export default createAppContainer(AppNavigator);