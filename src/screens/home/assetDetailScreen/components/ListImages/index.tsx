import React from 'react'
import { View, Text, FlatList, ImageSourcePropType, Image, TouchableHighlight } from 'react-native'
import Carrusel1 from "../../../../../assets/images/Carrusel1.png"
import Carrusel2 from "../../../../../assets/images/Carrusel2.png"
import Carrusel3 from "../../../../../assets/images/Carrusel3.png"
import Carrusel4 from "../../../../../assets/images/Carrusel4.png"
import Logo1 from "../../../../../assets/images/logo1.png"
import Logo2 from "../../../../../assets/images/logo2.png"
import Logo3 from "../../../../../assets/images/logo3.png"
import Logo4 from "../../../../../assets/images/logo4.png"
import { useStylesHomeImageCarrousel } from './styles'

interface IPropsItemCarrusel {
  image: ImageSourcePropType
  title:ImageSourcePropType
  description:string
}

const ListImages = () => {

    const styles = useStylesHomeImageCarrousel()

    const DATA_IMAGE_CARRUSEL = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba115',
          image: Carrusel1,
          logo:  Logo1,
          description: 'Aspira is building a modular, direct air capture system with the energy supply integrated into the modules.'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63116',
            image: Carrusel2,
            logo: Logo2,
            description:'uses renewable geothermal energy and waste heat to capture CO₂ directly from the air.',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72117',
          image: Carrusel3,
          logo:  Logo3,
          description:'Sustaera uses ceramic monolith air contactors to capture CO₂ directly from the air for permanent storage',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d73118',
          image: Carrusel4,
          logo: Logo4,
          description: 'The project consists of 30 Wind Turbine Generators (WTGs) of 3.0 MW capacities each'
        },
      ];
      
      const ItemCarrusel = ({image, title, description}:IPropsItemCarrusel) => (
        <View style={styles.containerItemCarrousel}>
          <Image source={image} style={styles.imageItemCarrousel}/>
          <View style={styles.contentImageCarrousel}>
            <View>
              <Image source={title}/>
            </View>
            <View style={styles.contentTextCarrousel}>
              <Text style={styles.descriptionCarrousel}>
              {description}
              </Text>
            </View>
            <TouchableHighlight
              onPress={()=>{}}
            >
              <Text style={{color:"#000000", textDecorationLine:'underline'}}>
                Read More
              </Text>
            </TouchableHighlight>
          </View>
        </View>
    )

  return (
    <View style={styles.container}>
          <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={DATA_IMAGE_CARRUSEL}
                renderItem={({item, index}) => {
                  return <ItemCarrusel 
                            key={index} 
                            description={item.description} 
                            image={item.image} 
                            title={item.logo}
                          />
                }}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <View style={{margin: 10}} />}
          />
        </View>
  )
}

export default ListImages