import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-ratings';
const RatingScreen = (props,{navigation}) => {
  const [rating, setRating] = useState(3);
  const [comment, setComment] = useState('');

  const submitRating = () => {
    const ratingData = { rating, comment };
    // send ratingData to API
    // navigate back to previous screen
  };

  return (
    <View style={styles.container}>
                 {/* Header */}
<View style={{ height: 80, backgroundColor: '#043927', borderBottomStartRadius: 40, borderBottomEndRadius: 40, justifyContent: "center" }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <View style={{}}>
           
          </View>
          <View style={{}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Rating</Text>
          </View>
          <View style={{ width: 24, width: 24 }}></View>
        </View>
      </View>
{/* Header */}
<View style={{padding:20}}>
      <Text style={styles.label}>Rating</Text>
      <Rating
        startingValue={rating}
        fractions={1}
        ratingCount={5}
        onFinishRating={(rating) => setRating(rating)}
      />
      <Text style={styles.label}>Comment</Text>
      <TextInput
        style={styles.input}
        value={comment}
        onChangeText={(text) => setComment(text)}
        multiline={true}
        numberOfLines={4}
      />
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
              Rate Ride
            </Text>
          </TouchableOpacity>
          
        </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
  label:{
    fontSize:20,
    fontWeight:'bold',
    color:'black',
    marginBottom:10
  },
  input: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    padding: 5,
  },

});

export default RatingScreen;
