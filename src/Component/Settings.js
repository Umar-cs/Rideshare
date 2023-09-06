import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
const img ={uri : 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'}
const Settings = ({navigation}) => {
  return (
    <View >
         <View style={{ height: 80, backgroundColor: '#043927', borderBottomStartRadius: 40, borderBottomEndRadius: 40, justifyContent: "center" }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <View style={{}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Settings</Text>
          </View>
          <View style={{ width: 24, width: 24 }}></View>
        </View>
      </View>
      <View style={{alignItems:'center',flexDirection:'row', justifyContent:'space-between', marginTop:7,padding:4}}>
        <Text style={{fontSize:25, fontWeight:'bold', color:'black'}}>User #1234</Text>
        
        <Image source={img} style={{height:50, width:50, borderRadius:150}}/>
      </View>
<Text>     ----------------------------------------------------------------------  </Text>
      <View style={{ margin:5, padding:5, marginVertical:10, paddingVertical:10}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Messages')}><Text style={styles.text}>Messages</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>Linking.openSettings()}><Text style={styles.text}>Settings</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Payment')}><Text style={styles.text}>Payment</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Legal')}><Text style={styles.text}>Legal</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Contact')}><Text style={styles.text}>Contact Us</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('About')}><Text style={styles.text}>About Us</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Report')}><Text style={styles.text}>Report a Problem</Text></TouchableOpacity>
      </View>
      <View style={{justifyContent:'center', alignItems:'center'}}>
      <TouchableOpacity
            style={{
              borderRadius: 15,
              borderWidth: 0.1,
              width: 200,
              height: 50,
              backgroundColor: '#043927',
              justifyContent: 'center',
            }}
            onPress={()=>navigation.navigate('Login')}
            >
            <Text
              style={{textAlign: 'center',color:'#fff', elevation: 100, fontSize:19}}>
              Log Out
            </Text>
          </TouchableOpacity>
          </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
    text:{fontSize:22, fontWeight:'400', color:'black', marginTop:10}
})