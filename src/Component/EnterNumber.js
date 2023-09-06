import { View, Text, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'

const EnterNumber = ({navigation}) => {
  return (
    <View style={{justifyContent:'center'}}>
     {/* Header */}
<View style={{ height: 80, backgroundColor: '#043927', borderBottomStartRadius: 40, borderBottomEndRadius: 40, justifyContent: "center" }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <View style={{}}>
           
          </View>
          <View style={{}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>KFUEIT RideShare</Text>
          </View>
          <View style={{ width: 24, width: 24 }}></View>
        </View>
      </View>
{/* Header */}

     <View style={{justifyContent:'center',alignItems:'center', marginTop:"50%"}}>
        <Text style={{fontSize:25,fontWeight:'bold',color:'#4F7942'}}>Enter Mobile Number</Text>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center', marginLeft:'33%', margin:20}}>
        <Text style={{fontSize:25}}>+92 |</Text>
        <TextInput
       
        placeholder='3001234567'
        keyboardType='number-pad'
        
        style={{borderColor:'black',width:230 ,color:'#043927', fontSize:25}}
        />
        </View>
        <TouchableOpacity style={{borderRadius:15,borderWidth:0.1,width:180,height:50,backgroundColor:'#043927',justifyContent:'center'}} onPress={()=>navigation.navigate('Onetime')}><Text style={{textAlign:'center',color:'white'}}>Get OTP</Text></TouchableOpacity>
     </View>
    </View>
  )
}

export default EnterNumber