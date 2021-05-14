import React, { Component } from 'react';
import {StyleSheet,View ,Text,TouchableOpacity,Button,ImageBackground,Image} from 'react-native';

export default function Error (){

  return(
    

      <View style={styles.container}>
       <Text style={styles.text}>Sorry Invalid request.!!{"\n"}Please try again later.</Text>
    
      </View>
 
    );
  


}
const styles = StyleSheet.create({  
  container: {  
      flex: 1,  
      justifyContent: 'center',  
      alignItems: 'center', 
      textAlign:'center',
      color:'grey',
      fontSize:30,
      backgroundColor: '#003f5c'
      
       
  },
  backgroundImage:
  {
      flex:1,
      width:null,
      height:null
  },
  text:
  {
    color:'white',
    fontSize:30
  }
});  
  




