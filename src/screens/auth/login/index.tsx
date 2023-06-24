import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useStylesLogin } from './styles'
import { Button, FormControl, Input, Pressable } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons';
import { THEME } from '../../../styles';
import { loginScreenProps } from '../../../types/screens/auth/login';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { REGEX_PASSWORD } from '../register';
import { useAppDispatch } from '../../../state/hooks';
import { login } from '../../../state/features/auth/authSlice';

interface ILogin{
  email:string
  password:string
}

const Login = (props:loginScreenProps) => {

  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false)
  const styles = useStylesLogin()

  const initialValues: ILogin = {
    email:'',
    password:'',
  }

  const validationSchema = yup.object().shape({
    email: yup
     .string()
     .email('Please enter valid e-mail')
     .max(50, 'Maximum 50 characters')
     .lowercase()
     .required('E-mail is required'),
    password: yup
     .string()
     .matches(
       REGEX_PASSWORD,
       '"Must contain at least 8 characters, one uppercase, one lowercase, one number and a special character"')
     .required('Password is required'),  
 })

 const formik = useFormik({
  initialValues,
  validationSchema,
  onSubmit: (values)=>{
   dispatch(login())
}});  

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
              onChangeText={formik.handleChange('email')}
              value={formik.values.email}
              onBlur={formik.handleBlur('email')}
            />
            <FormControl.ErrorMessage>
              {formik.errors.email}
            </FormControl.ErrorMessage>
            
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
              onChangeText={formik.handleChange('password')}
              value={formik.values.password}
              onBlur={formik.handleBlur('password')}  
            />
            <FormControl.ErrorMessage>
              {formik.errors.password}
            </FormControl.ErrorMessage>
        </FormControl>    
      </View>  

      <View style={{flex:4}}>          
        <Button 
          size="lg" 
          backgroundColor={THEME.colors.primaryOne}
          onPress={()=>formik.handleSubmit()}
        >
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