import React, { Component ,useState} from 'react';
import {StyleSheet,View ,Text,TouchableOpacity,Button,ImageBackground,Image, TextInput} from 'react-native';

export default function  Home({navigation}){
const pass='admin';
const userName='Atul';
const Auth1='False';
const [id,setId] = useState('');
const [name,setName] =useState('');
const [nameerror,setnameerror] =useState({});
const [passerror,setpasserror]=useState({});
let uerror='';
let perror='';

    

const onPressHandler = ()=>
{
    if(name == '')
    {
        uerror="User name required";
        alert(`Username required`);
    }else if(id == ''){
        perror="password required";
        alert(`Password required`);
    }
    else{
        (name==userName && id==pass)? 
        navigation.navigate('About'):navigation.navigate('Error')
    }
}
const onPressHandlerReg =()=>{
    navigation.navigate('Registration');
}

    return(

              <View style={styles.container}>
                 <Text style={styles.text}>Welcome to Login Page</Text>
                   <Text>{"\n"}</Text>
                <View style={styles.form} >

                        <View style={styles.uname}>
                            <TextInput  style={styles.input}  
                                        maxLength={15} value={name} 
                                        placeholder={'Enter User Name'} 
                                        onChangeText={(name)=>setName(name)}/>
                        </View>
                        <Text style={styles.error}>{uerror}</Text>
                       
                        <View style={styles.uname}>

                          <TextInput secureTextEntry={true} 
                                      maxLength={6} 
                                      style={styles.input} 
                                      value={id} 
                                      placeholder={'Enter Password'} 
                                      onChangeText={(id)=>setId(id)}/>
                        </View>
                        <Text style={styles.error}>{perror}</Text> 

                        <TouchableOpacity>
                        <Text style={styles.forgot}>Forgot Password?</Text>
                        </TouchableOpacity>

                        <View style={styles.button}>
                          <TouchableOpacity style={styles.btn} 
                          onPress={onPressHandler }><Text style={styles.txtbutton}>Login</Text>
                          </TouchableOpacity>
                        </View>

                        <View style={styles.button1}>      
                           <TouchableOpacity style={styles.btn}  
                           onPress={onPressHandlerReg}><Text style={styles.txtbutton}>Register</Text>
                           </TouchableOpacity>
                        </View>     
                </View>
                
              </View>
      
            );
 }
  
  



const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage:
  {
      flex:1,
      width:null,
      height:null
  },
  error:
  {
      color:'red',
      fontSize:30
  },
  form:{
      borderColor:'white',
      width:300,
      height:400,
      borderRadius:50,
      backgroundColor:'003f5c'
  },
  uname:{
        marginTop:20,
        color:'black'
  },
  head:
  {
      fontSize:80,
      height:55,
      backgroundColor:'#003f5c',
      color:'white',
      padding:10,
      marginBottom:20,
      letterSpacing:3

  },
  texthead:{
      fontSize:30,
      textAlign: 'center'
  },
  label:
  {
    //   color:"black",
    //   fontSize:15,
    //   margin:20,
    //   marginLeft:0
    height: 30, 
    textAlign:'center',
    borderRadius:25,
    justifyContent:"center",

  },
  input:{
    height: 50,
    textAlign:'left',
    backgroundColor:'#CEC4D3',
    color: 'black',
    width:250,
    marginLeft:25,
    borderRadius:30,
    paddingLeft:20,
    marginBottom: 10
  },
  button:
  {
      marginTop:0,
      width:120,
      alignContent:'center',
      textAlign:'center',
      marginLeft:90,
      backgroundColor:'#fb5b5a ',
      marginBottom: 20,
  },
  btn:{
    backgroundColor:'#fb5b5a',
    width:null,
    height:30,
    padding:5,
    letterSpacing:2,
    borderRadius:5,
    fontSize: 50
  },
  text:{
    color:"white",
    fontSize:25,
    marginBottom: 30,
    marginTop: 25
  },
  forgot:{
    color:"white",
    fontSize:15,
    textDecorationLine: 'underline',
    textAlign: 'center',
    paddingBottom:20
  },
  button1:{
      marginTop:20,
      width:200,
      alignContent:'center',
      textAlign:'center',
      marginLeft:50,
      backgroundColor:'#fb5b5a ',
      fontWeight: 600,
      fontSize: 40
  },
  txtbutton:{
    fontSize:16,
    fontWeight: 500
  }

});  
  




