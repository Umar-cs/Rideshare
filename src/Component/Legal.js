import { View, Text, Image , TouchableOpacity} from 'react-native'
import React from 'react'

const Legal = ({navigation}) => {
  return (
    <View>
       {/* Header */}
<View style={{ height: 80, backgroundColor: '#043927', borderBottomStartRadius: 40, borderBottomEndRadius: 40, justifyContent: "center" }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <View style={{}}>
           
          </View>
          <View style={{}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Legal</Text>
          </View>
          <View style={{ width: 24, width: 24 }}></View>
        </View>
      </View>
{/* Header */}
<View style={{justifyContent:'center', alignItems:'center'}}>
    <Image  style={{height:300,width:360}} source={require('../images/Legal.png')}/>
</View>
<View style={{marginHorizontal:5}}><Text style={{textAlign:'center',letterSpacing:1,color:'black'}}>
"Copyright © [KFUEIT RideShare]. All rights reserved.

This ride share app and its contents are protected by copyright and other intellectual property laws. You may not reproduce, distribute, display, or perform the app, or any of its contents, without our prior written permission.

We reserve the right to modify, suspend, or discontinue any aspect of the app at any time, including the availability of any app feature, database, or content, without notice or liability.

By using this app, you agree to comply with all applicable laws and regulations, as well as our terms of use and privacy policy.

If you have any questions or concerns about our copyright message, please contact us."</Text></View>
<View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
           
          }}>
          <TouchableOpacity
            style={{
                marginTop:20,
              borderRadius: 15,
              borderWidth: 0.1,
              width: 200,
              height: 50,
              backgroundColor: '#043927',
              justifyContent: 'center',
            }}
            onPress={()=>navigation.navigate('Contact')}
            >
            <Text
              style={{textAlign: 'center',color:'#fff', elevation: 100, fontSize:19}}>
              Contact Us !
            </Text>
          </TouchableOpacity>
          
        </View>
    </View>
  )
}

export default Legal