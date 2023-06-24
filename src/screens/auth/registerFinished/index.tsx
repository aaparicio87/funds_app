import { View, Text } from 'react-native'
import React from 'react'
import { useStylesRegisterFinish } from './styles'
import { registerFinishedProps } from '../../../types/screens/auth/login'
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'native-base';
import { THEME } from '../../../styles';

const RegisterFinished = (props:registerFinishedProps) => {

  const styles = useStylesRegisterFinish()

  return (
    <View style={styles.container}>
        <View style={styles.content}>
          <Icon name="send" size={100} color="#1D1E25" />
          <Text style={{fontSize:24, fontWeight:'600', color:"#000000" }}>
              Register success!
          </Text>
        </View>
        <View style={styles.bottom}>
            <Button onPress={()=>props.navigation.navigate('Login')} backgroundColor={THEME.colors.primaryOne}>
                Back to Login
            </Button>
        </View>
   </View>
  )
}

export default RegisterFinished