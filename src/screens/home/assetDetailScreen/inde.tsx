import React from 'react'
import { View, Text, SafeAreaView, ScrollView, useWindowDimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useStylesDetailsAssets } from './styles'
import { THEME } from '../../../styles';
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
import { TabView, SceneMap } from 'react-native-tab-view';
import ListImages from './components/ListImages';
import TabBarUpdated from './components/TabBarUpdated';
import { Button } from 'native-base';


const FirstRoute = () => (
    <ListImages/>
  );
  
  const SecondRoute = () => (
    <ListImages/>
  );

  const ThirdRoute = () => (
    <ListImages/>
  );

  const FourthRoute = () => (
    <ListImages/>
  );
  
  const renderScene = SceneMap({
    higth: FirstRoute,
    value: SecondRoute,
    vintage: ThirdRoute,
    registry: FourthRoute,
  });
  

const AssetDetailScreen = () => {

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'higth', title: 'Highlight' },
      { key: 'value', title: 'Value' },
      { key: 'vintage', title: 'Vintage' },
      { key: 'registry', title:'Registry'}
    ]);  

  const styles = useStylesDetailsAssets()
  
  const data = {
    labels: ["1h", "1d", "1w", "1m", "1y", "All"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => THEME.colors.green, 
        strokeWidth: 2 // optional
      }
    ]
  };

  const chartConfig = {
    backgroundGradientFrom: "white",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "white",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => THEME.colors.green,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };
  

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView 
        showsVerticalScrollIndicator={false}
        >
          <View style={{flexDirection:'row', justifyContent:"space-between", alignItems:'center'}}>
            <Text style={{fontSize:24, fontWeight:'600', color:'#000000'}}>$18.23</Text>
            <Text style={{fontSize:24, fontWeight:'600', color:'#000000'}}>2022</Text>
          </View>
          <View style={{flexDirection:'row', marginVertical:5}}>
                <Icon name='trending-up-outline' color={THEME.colors.green} size={15} style={{paddingHorizontal:2}}/>
                <Text style={{fontSize:14, fontWeight:'400', color:THEME.colors.green}}>3.51% ($1.21)</Text>
          </View>  

          
          <LineChart
            style={{alignSelf:'center'}}
            data={data}
            width={screenWidth}
            height={220}
            withInnerLines={false}
            withVerticalLines={false}
            withHorizontalLines={false}
            withHorizontalLabels={false}
            chartConfig={{...chartConfig, propsForLabels:{fontSize:15, fontWeight:'500'}}}
            /> 
            <View style={{marginVertical:10}}>
                <Text style={{fontSize:24, fontWeight:'600', color:'#000000'}}>Info & Stats</Text>
            </View>
            <View style={{width:'80%',flexDirection:'row', marginVertical:5, justifyContent:'space-between'}}>
               <View>
                  <View style={{marginVertical:10}}>
                     <View style={{flexDirection:'row', marginVertical:2, alignItems:'center'}}>
                        <Text style={{fontSize:14, fontWeight:'400', color:'#A0A0A0'}}>AUM</Text>
                        <Icon name='information-circle-outline' size={14} color='#A0A0A0' style={{paddingLeft:2}}/>
                     </View>   
                     <Text style={{fontSize:14, color:'#000000', fontWeight:'400'}}>$430.88m</Text>   
                  </View>

                  <View style={{marginVertical:10}}>
                     <View style={{flexDirection:'row', marginVertical:2, alignItems:'center'}}>
                        <Text style={{fontSize:14, fontWeight:'400', color:'#A0A0A0'}}>Vintage Range</Text>
                        <Icon name='information-circle-outline' size={14} color='#A0A0A0' style={{paddingLeft:2}}/>
                     </View>   
                     <Text style={{fontSize:14, color:'#000000', fontWeight:'400'}}>2019 - 2022</Text>   
                  </View>  

                  <View style={{marginVertical:10}}>
                     <View style={{flexDirection:'row', marginVertical:2, alignItems:'center'}}>
                        <Text style={{fontSize:14, fontWeight:'400', color:'#A0A0A0'}}>Price at Close</Text>
                        <Icon name='information-circle-outline' size={14} color='#A0A0A0' style={{paddingLeft:2}}/>
                     </View>   
                     <Text style={{fontSize:14, color:'#000000', fontWeight:'400'}}>$17.68</Text>   
                  </View>    
               </View>
                
               <View>
                  <View style={{marginVertical:10}}>
                     <View style={{flexDirection:'row', marginVertical:2, alignItems:'center'}}>
                        <Text style={{fontSize:14, fontWeight:'400', color:'#A0A0A0'}}>Issue Date</Text>
                        <Icon name='information-circle-outline' size={14} color='#A0A0A0' style={{paddingLeft:2}}/>
                     </View>   
                     <Text style={{fontSize:14, color:'#000000', fontWeight:'400'}}>18/04/2022</Text>   
                  </View>

                  <View style={{marginVertical:10}}>
                     <View style={{flexDirection:'row', marginVertical:2, alignItems:'center'}}>
                        <Text style={{fontSize:14, fontWeight:'400', color:'#A0A0A0'}}>TER</Text>
                        <Icon name='information-circle-outline' size={14} color='#A0A0A0' style={{paddingLeft:2}}/>
                     </View>   
                     <Text style={{fontSize:14, color:'#000000', fontWeight:'400'}}>0.15%</Text>   
                  </View>  

                  <View style={{marginVertical:10}}>
                     <View style={{flexDirection:'row', marginVertical:2, alignItems:'center'}}>
                        <Text style={{fontSize:14, fontWeight:'400', color:'#A0A0A0'}}>Price at Open</Text>
                        <Icon name='information-circle-outline' size={14} color='#A0A0A0' style={{paddingLeft:2}}/>
                     </View>   
                     <Text style={{fontSize:14, color:'#000000', fontWeight:'400'}}>$17.74</Text>   
                  </View>    
               </View>
            </View> 

            <View style={{marginVertical:10}}>
                <Text style={{fontSize:24, fontWeight:'600', color:'#000000'}}>Fund Breakdown</Text>
            </View>
            <TabView
                renderTabBar={TabBarUpdated}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
            />
            <ListImages/>
            <View style={{flexDirection:'row', alignItems:'center'}}>
               <Icon name='pie-chart-outline' size={24} color="#000000"/>
               <Text style={{fontSize:24, fontWeight:'600', color:'#000000', paddingLeft:5}}>Your Portfolio</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginVertical:5}}>
               <Text style={{fontSize:24, fontWeight:'600', color:'#000000'}}>18 credits</Text>
               <Text style={{fontSize:24, fontWeight:'600', color:'#000000'}}>$328.14</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginVertical:5}}>
               <View style={{flexDirection:'row', marginVertical:5}}>
                  <Icon name='trending-up-outline' color={THEME.colors.green} size={15} style={{paddingHorizontal:2}}/>
                  <Text style={{fontSize:14, fontWeight:'400', color:THEME.colors.green}}>8.41%</Text>
               </View>  
               <Text style={{fontSize:14, fontWeight:'400', color:'#A0A0A0'}}>Last purchase 28d ago</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
               <Button
                   variant='outline' 
                   size='lg'
                   paddingLeft={10}
                   paddingRight={10}
               >
                  <Text style={{color:THEME.colors.primaryOne, fontSize:16, fontWeight:'500'}}>
                     Sell
                  </Text>
               </Button>
               <Button size='lg' background={THEME.colors.green}>
               <Text style={{color:'white', fontSize:16, fontWeight:'500'}}>
                  Retire credits
               </Text>   
               </Button>
            </View>
            <Text style={{color:'#A0A0A0', fontWeight:'400', fontSize:11, paddingVertical:10}}>
               You’ve previously retired 28 credits of this asset
            </Text>

            <View style={{width:335, height:115, backgroundColor:'#F4F4F4', borderRadius:4, justifyContent:'center', paddingHorizontal:5}}>
               <Text style={{width:315, height:95, fontSize:12, fontWeight:'400', textAlign:'left'}}>
                  Please note that prices are for reference only and may vary at the time of excecuting a buy or sell order. 
                  The information provided is not investment advice, and should not be used as a recommendation to buy or sell assets.
               </Text>
            </View>

            <View style={{flex:1, justifyContent:'center', marginVertical:10}}>
               <Button size='lg' height={60} backgroundColor={THEME.colors.primaryOne}>Buy</Button>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default AssetDetailScreen