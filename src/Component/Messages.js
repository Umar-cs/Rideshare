import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView} from 'react-native'
import React,{useState} from 'react'

const Messages = ({navigation}) => {
  const [requester, setRequester] = useState([
    { key: 1, item: 'Rider #1234', text:'Hello, I am Available' },
    { key: 2, item: 'Rider #3525',text:'You still looking for the ride?' },
    { key: 3, item: 'Rider #3535',text:'Thank You' },
    { key: 4, item: 'Rider #5456', text:'Can you help me?'},
    { key: 5, item: 'Rider #7534',text:'No' },
    { key: 6, item: 'Rider #7539',text:'Somtimes yes' },
    { key: 7, item: 'Rider #4257', text:'Not Reallys'},
    { key: 8, item: 'Rider #8567',text:'It is what it is' },
    { key: 9, item: 'Riedr #2485',text:'okay' },
  ])
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
   <View style={{ height: 80, backgroundColor: '#043927', borderBottomStartRadius: 40, borderBottomEndRadius: 40, justifyContent: "center" }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <View style={{}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Messages</Text>
          </View>
          <View style={{ width: 24, width: 24 }}></View>
        </View>
      </View>

{/* Body */}
    <ScrollView>
    {
          requester.map((i) => {
            return (
              <View style={{backgroundColor:'white',padding:15}} key={i.key}>

                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",}}>
                <Text style={{color:'black',fontSize:18,fontWeight:'bold'}}>{i.item}</Text>
             
                </View>

                <View style={{flexDirection:"row",justifyContent:"space-between",}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Conversation')}><Text style={{color:'#A8A8A8',fontSize:14,}}>{i.text} </Text></TouchableOpacity>
                </View>

                <View style={{backgroundColor:'#D1D1D1',height:2,marginTop:10}}></View>
                
              </View>
            )
          })

        }

    </ScrollView>
    </View>
  )
}

export default Messages

const styles = StyleSheet.create({})