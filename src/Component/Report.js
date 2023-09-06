import { View, Text,Image, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { useState } from 'react';
const Report = (props,{navigation}) => {
    const [problem, setproblem] = useState('');
    const submitProblem = () => {
        const ratingData = { rating, comment };
        // send Report to API
        // navigate back to previous screen
      };
    
  return (
    <View>
       {/* Header */}
<View style={{ height: 80, backgroundColor: '#043927', borderBottomStartRadius: 40, borderBottomEndRadius: 40, justifyContent: "center" }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <View style={{}}>
           
          </View>
          <View style={{}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Report a Problem</Text>
          </View>
          <View style={{ width: 24, width: 24 }}></View>
        </View>
      </View>
{/* Header */}
<View style={{justifyContent:'center', alignItems:'center'}}>
    <Image  style={{height:250,width:360}} source={require('../images/Report.png')}/>
</View>
<View style={{marginHorizontal:5}}><Text style={{textAlign:'center',letterSpacing:0.5,color:'black'}}>We are sorry to hear that you are experiencing a problem with our ride share app. We appreciate you taking the time to bring this to our attention.Could you please provide us with more details about the problem you're encountering?</Text></View>
   <View style={{alignItems:'center'}}><TextInput
        style={styles.input}
        value={problem}
        onChangeText={(text) => setproblem(text)}
        multiline={true}
        numberOfLines={4}
      /></View> 
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
            onPress={()=>navigation.navigate('HomeScreen')}
            >
            <Text
              style={{textAlign: 'center',color:'#fff', elevation: 100, fontSize:19}}>
              Submit Problem
            </Text>
          </TouchableOpacity>
          
        </View>
    
    </View>
    
  )
};

const styles= StyleSheet.create({
    input: {
        height: 150,
        width:340,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop:20,
        padding: 5,
      },
})
export default Report