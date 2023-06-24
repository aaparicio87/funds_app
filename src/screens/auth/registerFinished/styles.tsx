import { StyleSheet } from "react-native";

export const useStylesRegisterFinish= () =>StyleSheet.create({
    container: {
      flex:1,
      padding:20,
      flexDirection:"column", 
      justifyContent:"space-between", 
      alignItems:"stretch", 
    },
    content:{
      flex:3, 
      justifyContent:"center", 
      alignSelf:"center", 
      alignItems:"center"
    },
    bottom:{
      flex:1, 
      justifyContent:"flex-end", 
      margin: 16
  },
});