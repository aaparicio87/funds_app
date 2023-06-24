import { NavigationContainer } from '@react-navigation/native'
import Auth from '../auth'
import Home from '../home'

const Main = () => {

    let isAuth:boolean = true

  return (
    <NavigationContainer>
      {!isAuth ? <Auth/> : <Home/> }  
    </NavigationContainer>
  )
}

export default Main