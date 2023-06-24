import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useStylesRegister } from './styles'
import { Button, Checkbox, FormControl, Input, Pressable, theme } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons';
import { THEME } from '../../../styles';
import { registerScreenProps } from '../../../types/screens/auth/login';

const Register = (props:registerScreenProps) => {
  
  const styles = useStylesRegister()
  const [show, setShow] = useState(false)
  const [checked, setChecked] = useState(false)

  return (
    <View style={styles.container}>
      <View style={{flexDirection:"row", justifyContent:"center", marginBottom:50}}>
        <Text style={{fontSize:18, fontWeight:'600', textAlign:'center', color:"#000000"}}  >Create your account</Text>
      </View>

      <View style={{flex:2}}>
        <FormControl w="100%">
            <FormControl.Label>
              <Text style={{color:'#A0A0A0', fontSize:11, fontWeight:'400'}}>
                First Name
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
                Last Name
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
              <Checkbox
                marginTop={5} 
                isChecked={checked} 
                onChange={() => setChecked(!checked)} 
                value=''
              > 
               <View style={{alignItems:'center'}}>
                   <View>
                      <Text style={{fontSize:12, fontWeight:'400'}}>I am over 18 years of age and I have read and agree</Text>
                   </View>
                   <View style={{flexDirection:'row', width:'100%'}}> 
                      <Text style={{fontSize:12, fontWeight:'400'}}>to the</Text>
                    <TouchableOpacity onPress={()=>{}} style={{marginHorizontal:5}}>
                      <Text style={{fontSize:12, fontWeight:'400', textDecorationLine: 'underline', color:'#000000'}}>Terms of Service </Text>
                    </TouchableOpacity> 
                    <Text style={{fontSize:12, fontWeight:'400'}}>and</Text>
                    <TouchableOpacity onPress={()=>{}} style={{marginHorizontal:5}}>
                      <Text style={{fontSize:12, fontWeight:'400', textDecorationLine: 'underline',color:'#000000'}}> Privacy policy.</Text>
                    </TouchableOpacity>
                   </View>
                </View>
              </Checkbox>
        </FormControl>    
      </View>
      <View style={{flex:1}}>
          <Button size="lg" backgroundColor={THEME.colors.primaryOne} marginTop={5}>
            Login
          </Button>
          <View style={{marginTop:5, alignItems:"center", flexDirection:"row", justifyContent:'center'}}>
                <Text style={{fontSize:12, fontWeight:'400', color:'#A0A0A0'}}>
                  Already have an account?
                </Text>  
                <TouchableOpacity
                  onPress={()=>{props.navigation.navigate('Login')}}
                >
                  <Text style={{fontSize:12, fontWeight:'400', color:'#000000', paddingLeft:5, textDecorationLine:'underline'}}>
                    Log in Here
                  </Text>
                </TouchableOpacity>
          </View>              
      </View>          
    </View>
  )
}

export default Register