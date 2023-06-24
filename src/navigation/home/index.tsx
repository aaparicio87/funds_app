import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../types/navigation/home';
import HomeTabs from '../homeTabs';
import AssetDetailScreen from '../../screens/home/assetDetailScreen/inde';


const Stack = createNativeStackNavigator<HomeStackParamList>();


const Home = () => {
  return (
    <Stack.Navigator
     screenOptions={{
       headerTransparent:false,
       headerTitleAlign:"center",
       headerShadowVisible:false,
       animation:"slide_from_right",
     }}
   >

    <Stack.Screen 
        name="Account" 
        component={HomeTabs}
        options={{
          headerTransparent:true,
          headerBackVisible:false,
          headerTitle:"",
          headerLeft: () => "",
          headerShown:false
        }} 
    />

    <Stack.Screen
      name='AssetDetailScreen'
      component={AssetDetailScreen}
      options={{
        headerTitle:'Wind Fund',
      }}
    />

   </Stack.Navigator>
  )
}

export default Home