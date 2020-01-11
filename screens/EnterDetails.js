import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Alert,
  FlatList,
  Button,
  Dimensions,
  ImageBackground,
  Image, ScrollView
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import ImagePicker from 'react-native-image-crop-picker';
 
import {fire, storage} from '../fire'; 
// import CandidateImagePicker from './UI/CandidateImagePicker';
const {width: WIDTH} = Dimensions.get('window')
// const   CandidateForm = (props) => {

//   setCandidateImage = (image) => {
//     props.setFieldValue('imageUri', image.uri);
//   }

// function randomString(length, chars) {
//   var result = '';
//   for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
//   return result;
// }
// var rString = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

var enterdetails = (name, kulliyah, matric, manifesto, manifesto2, manifesto3) => {
 var pushData = fire.ref(`/candidate/${matric}`).update({
    name: name,
    kulliyah: kulliyah,
    matric: matric,
    manifesto: manifesto,
    manifesto2: manifesto2,
    manifesto3: manifesto3,
    vote: 0
  });


};

const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs;
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob;

export default class App extends Component {
  
 
  
      state = {
        name: '',
        kulliyah: '',
        matric:'',
        image:null,
        imageType:null
      };
      

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
  handleChangeMatric = e => {
    this.setState({
      matric: e.nativeEvent.text
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
    this.uploadImage()
    Alert.alert('Details of Candidate successfully entered');
    
  };

  pickImage = () =>{
    
    ImagePicker.openPicker({
      width:150,
          height:150,
          cropping:true
    }).then(image => {
      this.setState({
        image: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
      });
    });
    
  };

  uploadImage () {
    
    return new Promise((resolve,reject)=> {
        let uploadBlob = null;
        const appendIDToImage = new Date().getTime();
        const imageRef = storage.ref('pictures').child(`${appendIDToImage}`);
    
        fs.readFile(this.state.image, 'base64')
        .then((data) => {
            return Blob.build(data, { type: `${this.state.imageType};BASE64` })
        })
        .then((blob) => {
            uploadBlob = blob
            return imageRef.put(blob, { contentType: this.state.imageType })
        })
        .then(() => {
            uploadBlob.close()
            return imageRef.getDownloadURL()
        })
        .then((url) => {
            resolve(url)
            console.log(url)
            db.ref(`/candidate/${matric}`).update({
                image:url
            })
            })
        .catch((error) => {
            reject(error)
        })      
    })
}

  render() {
    return (
      <ScrollView>
      <ImageBackground source={require('../orange.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={styles.main}>

<View >
       {/* <CandidateImagePicker image={props.candidate.image} onImagePicked={setCandidateImage} /> */}
        <Text></Text>
        <Image
            source={this.state.image}
            style={{ width: 400, height: 400, resizeMode: 'contain' }}
          />

                            <TouchableHighlight 
                                style= {{backgroundColor:'#1B6951'}}
                                onPress={this.pickImage}>
                                
                                <Text style={{textAlign:'center'}}>Choose Thumbnail</Text>
                            </TouchableHighlight>
        <Text></Text>
        <Text style={styles.title}>Candidate Details</Text>
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
        onChange={this.handleChangeMatric}
        placeholder='Enter Matric Number...'
         />
        <Text></Text>
        <TextInput 
        style={styles.itemInput}
        onChange={this.handleChangeManifesto}
        placeholder='Enter first Manifesto...'
         />
         <Text></Text>
        <TextInput 
        style={styles.itemInput}
        onChange={this.handleChangeManifesto2}
        placeholder='Enter second Manifesto...'
         />
         <Text></Text>
        <TextInput 
        style={styles.itemInput}
        onChange={this.handleChangeManifesto3}
        placeholder='Enter third Manifesto...'
         />
        <Text></Text>
</View>

        <View style={styles.button}>
        <Button 
        
        title='add'
        onPress={this.handleSubmit}
        color='black'
        
        />

        </View>


      </View>
      </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    
    flex: 1,
    
    
    
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  itemInput: {
    width: WIDTH - 55,
       height: 45,
       
       fontSize: 16,
       paddingLeft: 45,
       backgroundColor: 'rgba(0,0,0,0.35)',
       color: 'rgba(255,255,255,0.7)',
       marginHorizontal: 25
  },
  button: {
    flex : 1,
    alignItems: 'center',
    
  }
}
);

