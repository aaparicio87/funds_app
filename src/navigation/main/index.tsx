import { NavigationContainer } from '@react-navigation/native'
import Auth from '../auth'
import Home from '../home'
import { useAppSelector } from '../../state/hooks'
import { selectAuth } from '../../state/features/auth/authSlice'

const Main = () => {

  const stateAuth = useAppSelector(selectAuth)

  return (
    <NavigationContainer>
      {!stateAuth.isAuth ? <Auth/> : <Home/> }  
    </NavigationContainer>
  )
}

export default Main