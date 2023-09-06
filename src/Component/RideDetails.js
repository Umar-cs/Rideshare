import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const RideDetails = ({navigation}) => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [price, setPrice] = useState('');
  const [seat, setSeats] = useState('');
  const submitRide = () => {
    const newRide = { pickup, dropoff, price , seat };
    // send newRide to API
    // navigate to RideDetails screen
  };

  return (

    <View style={styles.container}>
          {/* Header */}
<View style={{ height: 80, backgroundColor: '#043927', borderBottomStartRadius: 40, borderBottomEndRadius: 40, justifyContent: "center" }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <View style={{}}>
           
          </View>
          <View style={{}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Ride Details</Text>
          </View>
          <View style={{ width: 24, width: 24 }}></View>
        </View>
      </View>
{/* Header */}
<View style={{padding:20}}>
      <Text style={styles.label}>Pick-up</Text>
      <TextInput
        style={styles.input}
        value={pickup}
        onChangeText={(text) => setPickup(text)}
      />
      <Text style={styles.label}>Drop-off</Text>
      <TextInput
        style={styles.input}
        value={dropoff}
        onChangeText={(text) => setDropoff(text)}
      />
      <Text style={styles.label}>Price</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={(text) => setPrice(text)}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Available Seats</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={(text) => setSeats(text)}
        keyboardType="numeric"
      />
    <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
           
          }}>
          <TouchableOpacity
            style={{
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
              Submit
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
    borderRadius: 10,
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  button: {
    backgroundColor: '#0077C9',
    padding: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default RideDetails;
