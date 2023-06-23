import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { AuthStackParamList } from '../../types/navigation/auth';
import Login from '../../screens/auth/login';
import Register from '../../screens/auth/register';


const Stack = createNativeStackNavigator<AuthStackParamList>();

const Auth = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerTitle:'',
            headerShadowVisible: false,
            headerStyle:{backgroundColor:'white'},
            headerBackTitleVisible:false,
            contentStyle:{
            backgroundColor:'white'
            },
        }} 
    >
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Register' component={Register}/>  
    </Stack.Navigator>
  )
}

export default Auth