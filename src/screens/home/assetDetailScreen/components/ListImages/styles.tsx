import { Dimensions, StyleSheet } from "react-native";


export const useStylesHomeImageCarrousel= () => StyleSheet.create({
    container:{
        justifyContent:"center",
        marginVertical:15
    },
    serviceTitle:{
        fontSize:18, 
        fontWeight:"700", 
    },
    containerItemCarrousel:{
        height:Dimensions.get("window").height*0.36, 
        width:280, 
        backgroundColor:"#F7F7F7"
    },
    imageItemCarrousel:{
        height:Dimensions.get("window").height*0.18, 
        width:"100%"
    },
    contentImageCarrousel:{
        padding:10, 
        justifyContent:"space-around"
    },
    textTitleImageCarrousel:{
        fontSize:14, 
        fontWeight:"700"
    },
    contentTextCarrousel:{
        width:"100%", 
        marginVertical:5
    },
    descriptionCarrousel:{
        color:"#808D9E", 
        textAlign:"justify", 
        fontSize:14, 
        fontWeight:"400"
    },
    learnMore:{
        width:Dimensions.get("window").width/4,
        height:Dimensions.get("window").height/17,
        borderRadius:4,
        justifyContent:"center",
        alignItems:"center",
        marginVertical:5
    },
    textLearnMore:{
        fontSize:14, 
        color:"#ffffff"
    }
})