import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackParamList } from '../../types/navigation/home';
import { theme } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { THEME } from '../../styles';
import AccountScreen from '../../screens/home/accountScreen';
import PortFolioScreen from '../../screens/home/portFolioScreen';
import TradeScreen from '../../screens/home/tradeScreen';

const Tab = createBottomTabNavigator<HomeStackParamList>();


const HomeTabs = () => {
  return (
    <Tab.Navigator
    initialRouteName='AccountScreen'
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, size }) => {
        let iconName:string = 'home-outline';
        let color:string = '#808D9E';

        if (route.name === 'AccountScreen') {
          color = focused ? THEME.colors.primaryOne : theme.colors.black;
        } else if(route.name === 'PortFolioScreen'){
          iconName = 'swap-horizontal-outline';
          color = focused ? THEME.colors.primaryOne : theme.colors.black;
        }else if(route.name === 'TradeScreen'){
          iconName = 'pie-chart-outline'
          color = focused ? THEME.colors.primaryOne : theme.colors.black;
        }
        
        return  <Icon name={iconName} size={size} color={color} style={{marginTop:5}}/> ;
      },
      tabBarActiveTintColor: "#1D1E25",
      tabBarInactiveTintColor: 'gray',
      title:""      
    })}
    >
         <Tab.Screen 
          name="AccountScreen" 
          component={AccountScreen} 
          options={{headerShown:false, title:'Home'}}
        />

         <Tab.Screen 
          name='PortFolioScreen' 
          component={PortFolioScreen}
          options={{headerShown:false, title:'Trade'}} 
        />

         <Tab.Screen 
          name='TradeScreen'
          component={TradeScreen}
          options={{headerShown:false, title:'Portfolio'}}  
         />

         
    </Tab.Navigator>
  )
}

export default HomeTabs 