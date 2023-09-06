import { View, Text, Image } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View>
       {/* Header */}
<View style={{ height: 80, backgroundColor: '#043927', borderBottomStartRadius: 40, borderBottomEndRadius: 40, justifyContent: "center" }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <View style={{}}>
           
          </View>
          <View style={{}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>About Us</Text>
          </View>
          <View style={{ width: 24, width: 24 }}></View>
        </View>
      </View>
{/* Header */}
<View style={{justifyContent:'center', alignItems:'center'}}>
    <Image  style={{height:300,width:360}} source={require('../images/About.png')}/>
</View>
<View style={{marginHorizontal:5}}><Text style={{textAlign:'center',letterSpacing:1,color:'black'}}>"Welcome to our ride share app! We are a team of experienced developers who are passionate about creating innovative solutions to make your transportation needs easier and more affordable. Our goal is to provide a safe and reliable platform for students to travel and earn a fair income. We understand the importance of convenience and simplicity in today's fast-paced world, and that's why we've created an app that's easy to use and navigate.

We believe that technology can make a positive impact on people's lives, and we're dedicated to constantly improving and updating our app to provide the best experience possible. We value feedback from our users and are always listening to your suggestions and concerns.

Thank you for choosing our ride share app for your transportation needs. We hope to continue serving you in the best way possible!"</Text></View>
    </View>
  )
}

export default About