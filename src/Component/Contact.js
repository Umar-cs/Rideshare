import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { Linking } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'

const Contact = () => {
  const phoneNumber = '1234567890'; // Phone number

const handlePhonePress = () => {
  Linking.openURL(`tel:${phoneNumber}`);
};
const recipientEmail = 'recipient@example.com'; // Eamil Address
const handleEmailPress = () => {
  Linking.openURL(`mailto:${recipientEmail}`);
};
  return (
    <View>
       {/* Header */}
<View style={{ height: 80, backgroundColor: '#043927', borderBottomStartRadius: 40, borderBottomEndRadius: 40, justifyContent: "center" }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <View style={{}}>
           
          </View>
          <View style={{}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Contact Us</Text>
          </View>
          <View style={{ width: 24, width: 24 }}></View>
        </View>
      </View>
{/* Header */}
<View style={{justifyContent:'center', alignItems:'center'}}>
    <Image  style={{height:300,width:360}} source={require('../images/Contact.png')}/>
</View>
<View style={{marginHorizontal:5}}><Text style={{textAlign:'center',letterSpacing:1,color:'black'}}>"Have a question or concern about our ride share app? We're here to help! Please feel free to contact.Thank you for choosing us, we value our customers and look forward to hearing from you!
</Text></View>
<View style={{alignItems:'center' , marginTop:40}}>
  <TouchableOpacity onPress={()=>handlePhonePress()}><SimpleLineIcons name='phone' size={50} color='#043927'/></TouchableOpacity>
  <Text selectable={true} style={{color:'black',fontWeight:'500',marginTop:5}}>{phoneNumber}</Text>
</View>

<View style={{alignItems:'center' , marginTop:40}}>
  <TouchableOpacity onPress={()=>handleEmailPress()}><Fontisto name='email' size={50} color="#900"/></TouchableOpacity>
  <Text selectable={true} style={{color:'black',fontWeight:'500'}}>{recipientEmail}</Text>
</View>
  
    </View>
  )
}

export default Contact