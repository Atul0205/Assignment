import React, { Component } from 'react';
import {StyleSheet,View ,Text,TouchableOpacity,Button,ImageBackground,Image,} from 'react-native';

export default class Data extends Component{

    constructor(props)
    {
        super(props);
    }



render()
{
       
         return(
    
       
        <View style={styles.container}>
                <Text style={styles.text}>User Successfully Registered</Text>
    
        </View>
        
            );
  
    }

}

const styles = StyleSheet.create({  
  container: {  
      flex: 1,  
      justifyContent: 'center',  
      alignItems: 'center', 
      textAlign:'center',
      color:'white',
      fontSize:24,
      backgroundColor: '#FFCFF'
      
       
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
    fontSize:24
  }
});  
  




