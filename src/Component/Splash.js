import { View, Text ,Image} from 'react-native'
import React from 'react'

const Splash = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center', backgroundColor:'#fff'}}>
      <Image style={{height:250,width:250}} source={require('../images/1.png')}/>
      <Text style={{fontSize:25,fontWeight:'bold', color:'black'}}>KFUEIT RideShare</Text>
    </View>
  )
}

export default Splash