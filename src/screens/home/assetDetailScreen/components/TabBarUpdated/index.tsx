import { Text } from 'react-native'
import { TabBar } from 'react-native-tab-view'
import { THEME } from '../../../../../styles'

const TabBarUpdated = (props:any) => {

    return (
      <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: THEME.colors.primaryOne }}
      style={{ backgroundColor: '#ffffff', }}
      renderLabel={({route, color}) => (
        <Text style={{ color: '#000000', margin: 8, fontSize:14, fontWeight:'600', width:'100%'}}>
          {route.title}
        </Text>
      )}
    />
    )
  }
  
  export default TabBarUpdated