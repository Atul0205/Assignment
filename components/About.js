import React, { Component } from 'react';
import {StyleSheet,View ,Text,TouchableOpacity,Button,ImageBackground,Image} from 'react-native';

export default function About ({navigation}){


 
  return(
    

        <View style={styles.container}>
       <Text style={styles.text}>Welcome, John!! </Text>
      </View>
  
    );
  


}
const styles = StyleSheet.create({  
  container: {  
      flex: 1,  
      justifyContent: 'center',  
      alignItems: 'center', 
      textAlign:'center',
      color:'white',
      fontSize:30,
      backgroundColor:'#FFCFF'
      
       
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
    fontSize:24,
    marginTop: 24
  }
});  
  




