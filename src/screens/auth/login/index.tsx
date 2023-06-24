import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useStylesLogin } from './styles'
import { Button, FormControl, Input, Pressable } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons';
import { THEME } from '../../../styles';
import { loginScreenProps } from '../../../types/screens/auth/login';


const Login = (props:loginScreenProps) => {
  const [show, setShow] = useState(false)
  const styles = useStylesLogin()

  return (
    <View style={styles.container}>
      <View style={{flex:1, flexDirection:"row", justifyContent:"center"}}>
        <Text style={{fontSize:18, fontWeight:'600', textAlign:'center', color:"#000000"}}>Login</Text>
      </View>

      <View style={{flex:2}}>
        <FormControl w="100%">
            <FormControl.Label>
              <Text style={{color:'#A0A0A0', fontSize:11, fontWeight:'400'}}>
                Email
              </Text>
            </FormControl.Label>
            <Input
              marginBottom={3}
              backgroundColor={"#F4F4F4"} 
              w={{
                md: "25%"
              }}  
              placeholder="john@doe.com" 
            />
            <FormControl.Label>
            <Text style={{color:'#A0A0A0', fontSize:11, fontWeight:'400'}}>
              Password
            </Text>
            </FormControl.Label>
            <Input 
              backgroundColor={"#F4F4F4"}
              w={{
                md: "25%"
              }} 
              type={show ? "text" : "password"} 
              InputRightElement={
                <Pressable onPress={() => setShow(!show)}>
                  <Icon name={`${show ? 'eye-outline' : 'eye-off-outline'}`} color={THEME.colors.grey} size={22} style={{margin:5}}/>
                </Pressable>} 
              placeholder="Minimum 8 characters" 
            />
        </FormControl>    
      </View>  

      <View style={{flex:4}}>          
        <Button size="lg" backgroundColor={THEME.colors.primaryOne}>
          Login
        </Button>
        <View style={{marginTop:10, alignItems:"center", flexDirection:"row", justifyContent:'center'}}>
              <Text style={{fontSize:12, fontWeight:'400', color:'#A0A0A0'}}>
                Don’t have an account?
              </Text>  
              <TouchableOpacity
                onPress={()=>{props.navigation.navigate('Register')}}
              >
                <Text style={{fontSize:12, fontWeight:'400', color:'#000000', paddingLeft:5, textDecorationLine:'underline'}}>Sign up</Text>
              </TouchableOpacity>
              <Text style={{fontSize:12, fontWeight:'400', color:'#A0A0A0', paddingLeft:5}}>
                here
              </Text>
        </View>      
      </View>                
    </View>
  )
}

export default Login