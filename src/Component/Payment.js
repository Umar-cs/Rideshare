import React, { useState } from 'react';
import { View, Text, TextInput, Button,StyleSheet,TouchableOpacity, Image } from 'react-native';

function PaymentScreen() {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvc, setCvc] = useState('');

  const handleSubmit = () => {
    // submit the payment details to your server or payment provider here
  }

  return (
    <View style={styles.container}>
         {/* Header */}
<View style={{ height: 80, backgroundColor: '#043927', borderBottomStartRadius: 40, borderBottomEndRadius: 40, justifyContent: "center" }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
          <View style={{}}>
           
          </View>
          <View style={{}}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Payment Details</Text>
          </View>
          <View style={{ width: 24, width: 24 }}></View>
        </View>
      </View>
{/* Header */}
<View style={{padding:20}}>
      <Text style={styles.label}>Card Number:</Text>
      <TextInput  style={styles.input}
        value={cardNumber}
        onChangeText={text => setCardNumber(text)}
        keyboardType="number-pad"
      />
      <Text style={styles.label}>Expiration Date:</Text>
      <TextInput  style={styles.input}
        value={expirationDate}
        onChangeText={text => setExpirationDate(text)}
        keyboardType="number-pad"
      />
      <Text style={styles.label}>CVC:</Text>
      <TextInput  style={styles.input}
        value={cvc}
        onChangeText={text => setCvc(text)}
        keyboardType="number-pad"
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
}
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
export default PaymentScreen;
