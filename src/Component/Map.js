import { View, Text , StyleSheet} from 'react-native'
import React, { useState } from 'react'
import Geolocation from '@react-native-community/geolocation'
import MapView, { PROVIDER_GOOGLE , Marker } from 'react-native-maps';
const Map = () => {
    const [currentlocation , setCurrentLocation] = useState(0)
    Geolocation.getCurrentPosition(data=>{
        setCurrentLocation(data.coords)
    })
    
  return (
    <View style={{   borderWidth:1,
      borderColor:'#636363'}}>
        
     <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: currentlocation.latitude,
        longitude: currentlocation.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
     >
           <Marker coordinate = {{latitude: currentlocation.latitude,longitude: currentlocation.longitude,latitudeDelta: 0.015,longitudeDelta: 0.0121,}}
         pinColor = {"red"} // any color
         title={"Location"}
         description={"Current Location"}/>
     </MapView>
    
    </View>
  )
}
const styles = StyleSheet.create({
    
    map: {
      width:'100%',
      height:290,
   
    },
   });
   
export default Map