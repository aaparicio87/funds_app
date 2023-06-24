import { View, Text, FlatList, TouchableHighlight, ScrollView } from 'react-native'
import React from 'react'
import { useStylesAccount } from './styles'
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { THEME } from '../../../styles';
import Coin from '../../../assets/svg/Coin';
import GraphWindFunds from '../../../assets/svg/GraphWindFunds';
import GraphSolarFunds from '../../../assets/svg/GraphSolarFunds';
import GraphNatureFunds from '../../../assets/svg/GraphNatureFunds';
import BusinessStadistic from '../../../assets/svg/BusinessStadistic';
import { SafeAreaView } from 'react-native-safe-area-context';
import { accountScreenProps } from '../../../types/screens/home';
import { HomeStackParamList } from '../../../types/navigation/home';

interface IPropsItem {
  icon: React.ElementType,
  graph:React.ElementType,
  title:string,
  route:string
}

const AccountScreen = (props:accountScreenProps) => {
  const styles = useStylesAccount()

  const DATA = [
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
        icon: ()=> <Feather name='wind' color='#4A88D0' />,
        graph:()=><GraphWindFunds/>,
        title: 'Wind Fund',
        route:"AssetDetailScreen"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d723',
        icon: ()=> <Feather name='sun' color='#F0A719' />,
        graph:()=><GraphSolarFunds/>,
        title: 'Solar Fund',
        route:"AssetDetailScreen"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d734',
        icon: ()=> <Feather name='sun' color='#0FDF8F' />,
        graph:()=><GraphNatureFunds/>,
        title: 'Nature',
        route:"AssetDetailScreen"
    },
    ];    

  const Item = ({icon:IconItem, title, graph:Graph, route}:IPropsItem) => (
    <View style={{alignItems:"center"}}>
      <TouchableHighlight 
        activeOpacity={0.6}
        underlayColor={THEME.colors.grey}
        onPress={()=>props.navigation.navigate(route as keyof HomeStackParamList)}
      >
        <View style={{width:145, height:145, borderColor:'#E6E6E6', borderWidth:1, borderRadius:4, paddingHorizontal:10, justifyContent:'space-around'}}>
            <IconItem/>
            <Text>{title}</Text>
            <Graph/>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
              <Text style={{fontSize:14, fontWeight:'400', color:'#000000', paddingRight:5}}>$1,245.23</Text>
              <View style={{flexDirection:'row', justifyContent:'center'}}>
                <Icon name='trending-up-outline' color={THEME.colors.green} size={15} style={{paddingHorizontal:2}}/>
                <Text style={{fontSize:14, fontWeight:'400', color:THEME.colors.green}}>31.82%</Text>
              </View>
            </View>
        </View>
      </TouchableHighlight>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
      >
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <Icon name='person-circle-outline' color={THEME.colors.black} size={22}/>
          <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:14, fontWeight:'600', color:'#000000'}}>
              Account: $1,457.23
            </Text>
            <Icon name='chevron-down-outline' color={THEME.colors.black} size={15}/>
          </View>

          <Icon name='notifications-outline' color={THEME.colors.black} size={22}/>

        </View>

        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginVertical:20}}>
          <View>
            <Text style={{fontSize:12, fontWeight:'400', color:'#000000'}}>Portfolio</Text>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
              <Text style={{fontSize:24, fontWeight:'600', color:'#000000', paddingRight:5}}>$1,245.23</Text>
              <View style={{flexDirection:'row', justifyContent:'center'}}>
                <Icon name='trending-up-outline' color={THEME.colors.green} size={15} style={{paddingHorizontal:2}}/>
                <Text style={{fontSize:14, fontWeight:'400', color:THEME.colors.green}}>31.82%</Text>
              </View>
            </View>
          </View>

          <View style={{backgroundColor:'#F7EFFF', width:100, height:30, alignItems:"center", justifyContent:'space-evenly', flexDirection:'row', marginTop:5}}>
            <Coin/>
            <Text style={{fontSize:11, fontWeight:'600', color:THEME.colors.primaryOne}}>Earn Rewards</Text>
          </View>
        </View>

        <View>
          <Text style={{fontSize:18, fontWeight:'600', paddingVertical:10, color:"#000000"}}>Funds</Text>
          <View>
          <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={DATA}
                    contentContainerStyle={{}}
                    renderItem={({item, index}) => {
                      return <Item 
                                key={index}  
                                icon={item.icon} 
                                title={item.title}
                                graph={item.graph}
                                route={item.route}
                              />
                    }}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={() => <View style={{marginHorizontal: 8}} />}
                  />
          </View>
        </View>

        <View style={{height:105, backgroundColor:THEME.colors.primaryOne, borderRadius:6, marginVertical:20, padding:10, flexDirection:'row', justifyContent:'space-between'}}>
          <View style={{justifyContent:'space-around', width:'50%'}}>
              <Text style={{fontSize:16, fontWeight:'600', color:"#ffffff" }}>Learn more about carbon credits</Text>
              <Text style={{color:"#ffffff", fontSize:12, fontWeight:'400'}}>Check out our top tips!</Text>      
          </View>
          <BusinessStadistic/>         
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{width:150, height:215, backgroundColor:'#F4F4F4', borderRadius:10, padding:10}}>
               <Text style={{fontSize:12, fontWeight:'600', color:"#000000", width:'80%'}}>
                Why should you invest here?  
               </Text>     
            </View>

            <View style={{width:150, height:215, backgroundColor:'#F4F4F4', borderRadius:10}}>
            </View>                  
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AccountScreen