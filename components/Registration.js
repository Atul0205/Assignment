import React, { Component ,useState} from 'react';
import {StyleSheet,View ,Text,TouchableOpacity,Button,ImageBackground,TextInput} from 'react-native';

export default function Registration ({navigation}){

    const [id,setId] = useState('');
    const [name,setName] =useState('');
    const[email,setEmail]=useState('');

    const onPressHandler = ()=>
    {
      navigation.navigate('Data');
    }

return(
    

      <View style={styles.container}>
    
      <View style={styles.form} >
               
               <View style={styles.head}>
                   <Text style={styles.texthead}>Registration Form </Text>
               </View>

               <View style={styles.uname}>
                   <Text style={styles.label}>Username: </Text>
                   <TextInput style={styles.input}  maxLength={10} value={name} placeholder={'Enter User Name'} onChangeText={(name)=>setName(name)}/>
               </View>
               
               <View style={styles.uname}>
                   <Text style={styles.label}>Email : </Text>
                   <TextInput style={styles.input}  maxLength={30} value={email} placeholder={'Enter Email '} onChangeText={(email)=>setEmail(email)}/>
               </View>
               


               <View style={styles.uname}>
               <Text style={styles.label}>Password: </Text>
                   <TextInput secureTextEntry={true} maxLength={6} style={styles.input} value={id} placeholder={'Enter Password'} onChangeText={(id)=>setId(id)}/>
               </View>
                
                
               <View style={styles.button}>
                  <TouchableOpacity style={styles.btn} onPress={onPressHandler} ><Text>Submit</Text></TouchableOpacity>
                  
               </View>
               
       </View>
                  
      

      </View>
  
    );
  


}
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center', 
        textAlign:'center',
        backgroundColor: '#FFCFF'
    },
    error:
    {
        color:'red'
    },
    form:{
        borderColor:'black',
        width:350,
        height:500,
        borderRadius:10,
        borderTopLeftRadius:10,
        backgroundColor:'#003f5c'
    },
    uname:{
          marginTop:20
    },
    head:
    {
        fontSize:80,
        height:55,       
        color:'white',
        marginBottom:20,
        letterSpacing:3
    },
    texthead:{
        fontSize:25,
        color:'white',
        backgroundColor: '#fb5b5a',
        paddingBottom:15,
        textAlign:'center',
        fontWeight: 600,
        paddingTop: 10
    },
    label:
    {
      height: 30, 
      textAlign:'left',
      paddingLeft: 50,
      color: 'white',
      fontSize: 20
  
    },
    input:{
      height: 40,
      textAlign:'left',
      backgroundColor:'#CEC4D3',
      width:250,
      marginLeft:50,
      borderRadius: 50,
      paddingLeft: 15
      
    },
    button:
    {
      marginTop:30,
        width:150,
        alignContent:'center',
        textAlign:'center',
        marginLeft:100,
        backgroundColor:'#fb5b5a ',
        
      
    },
    btn:{
      backgroundColor:'#59cbbd',
      width:null,
      height:30,
      padding:5,
      letterSpacing:2,
      borderRadius:5,
      
    }
  
  });  
    
    




