import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SearchBar } from 'react-native-screens'
import MyList from './Search'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Map from './Map'
import Switchs from './Switch'
const img1 = {uri : 'https://blog.kenjo.io/hubfs/AdobeStock_310893384%20%281%29.jpeg'}
const img2 = {uri : 'https://png.pngtree.com/png-clipart/20190617/original/pngtree-girl-going-home-greeting-woman-car-building-png-image_3855289.jpg'}
const HomeScreen = ({navigation}) => {
  return (
    <View >
   <View style={{ height: 80, backgroundColor: '#043927', borderBottomStartRadius: 40, borderBottomEndRadius: 40, justifyContent: "center" }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <View style={{}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Home Screen</Text>
          </View>
          <View style={{ width: 24, width: 24 }}></View>
        </View>
      </View>
      {/* <View style={{flexDirection:'row', marginTop:5, backgroundColor:'#D4D4D4' , height:50, width:'90%', justifyContent:'center', alignItems:'center',marginLeft:15, borderRadius:30}}>
        <FontAwesome5 name='search-location' size={35}/>
     <TextInput placeholder='Where to...' style={{ width:'80%', height:45, borderRadius:25, fontWeight:'bold', fontSize:20}}></TextInput>
    </View> */}
      <ScrollView style={{padding:10}}>

        <Text style={{fontSize:22, fontWeight:'bold', color:'black'}}>Ways to Travel:</Text>
        <ScrollView horizontal style={{marginTop:10}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Requests')}>
        <View style={{ flex:1,height:150, width:190,}}>
            <ImageBackground source={img1} resizeMode='cover' style={{flex:1,height:150, width:190, justifyContent:'flex-end'}}>
                <Text style={styles.text}>Home to University</Text>
            </ImageBackground>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Requests')}>
        <View style={{ flex:1,height:150, width:190, marginLeft:10}}>
            <ImageBackground source={img2} resizeMode='cover' style={{flex:1,height:150, width:190, justifyContent:'flex-end'}}>
                <Text style={styles.text}>University to Home</Text>
            </ImageBackground>
        </View>
        </TouchableOpacity>
        </ScrollView>
      
      <Text style={{fontSize:22, fontWeight:'bold', color:'black', marginBottom:5,marginTop:10}}>Around You :</Text>
      
      <Map/>
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "white",
        fontSize: 20,
        lineHeight: 25,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000"
      }
})