import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useStylesRegister } from './styles'
import { Button, Checkbox, FormControl, Input, Pressable, theme } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons';
import { THEME } from '../../../styles';
import { registerScreenProps } from '../../../types/screens/auth/login';
import { useFormik } from 'formik';
import * as yup from 'yup';

interface IRegister{
  firstName:string
  lastName:string
  email:string
  password:string
  terms:boolean
}

export const REGEX_NAME = /^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ\s\-\/.]+$/
export const REGEX_PASSWORD = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/

const Register = (props:registerScreenProps) => {

  const styles = useStylesRegister()
  const [show, setShow] = useState(false)
  const [checked, setChecked] = useState(false)

  const initialValues: IRegister = {
    email:'',
    firstName:'',
    lastName:'',
    password:'',
    terms:false
  }

  const validationSchema = yup.object().shape({
    firstName: yup
     .string()
     .matches(REGEX_NAME, "Please enter valid name")
     .min(3, "Minimum 3 characters")
     .max(50, "Maximum 50 characters")
     .required( "First name is required"),
   lastName: yup
     .string()
     .matches(REGEX_NAME,"Please enter valid last name")
     .min(3, "Minimum 3 characters")
     .max(50, "Maximum 50 characters")
     .required("Last name is required"),
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
     terms: yup
      .boolean().required().oneOf([true], 'Must accept Terms of services and Privacy policy'),    
 })

  

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values)=>{
     props.navigation.navigate('RegisterFinished')
  }});  
  

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
              onChangeText={formik.handleChange('firstName')}
              value={formik.values.firstName}
              onBlur={formik.handleBlur('firstName')}
            />
            <FormControl.ErrorMessage>
              {formik.errors.firstName}
            </FormControl.ErrorMessage>
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
              onChangeText={formik.handleChange('lastName')}
              value={formik.values.lastName}
              onBlur={formik.handleBlur('lastName')} 
            />
            <FormControl.ErrorMessage>
              {formik.errors.lastName}
            </FormControl.ErrorMessage>
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
              <Checkbox
                marginTop={5} 
                isChecked={checked} 
                onChange={() => {
                  setChecked(!checked)
                  formik.setFieldValue('terms', !checked)
                }} 
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
              <FormControl.ErrorMessage>
                {formik.errors.terms}
              </FormControl.ErrorMessage>
        </FormControl>    
      </View>
      <View style={{flex:1}}>
          <Button 
            size="lg" 
            backgroundColor={THEME.colors.primaryOne} 
            marginTop={5}
            onPress={() => formik.handleSubmit()}
          >
            Login
          </Button>
          <View style={{marginTop:10, alignItems:"center", flexDirection:"row", justifyContent:'center'}}>
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