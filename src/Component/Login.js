import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Camera from './Camera';

const SignupP = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Implement signup logic here
  };

  return (
    <View style={styles.container}>
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
      <View style={{ marginTop:'3%',
    margin:5,
    padding:10   }}>
       <Text style={styles.text}>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="abc@gmail.com"
        onChangeText={setEmail}
        value={email}
      />
      <Text style={styles.text}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="*********"
        onChangeText={setPassword}
        value={password}
        maxLength={8}
        secureTextEntry={true}
      />
      </View>
      <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <TouchableOpacity
            style={{
              borderRadius: 15,
              borderWidth: 0.1,
              width: 220,
              height: 60,
              backgroundColor: '#043927',
              justifyContent: 'center',
            }}
            onPress={()=>navigation.navigate('HomeScreen')}
            >
            <Text
              style={{textAlign: 'center',color:'#fff', elevation: 100, fontSize:19}}>
              Login
            </Text>
          </TouchableOpacity>
          
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    
},
  input: {
    borderRadius: 10,
    width: '90%',
    height: 40,
    borderColor: 'gray',
    fontSize:18,
    marginBottom: 20,
    padding: 10,
    fontWeight:'700'
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
    color:'black',
    marginBottom:10
  },
  text1:{
    fontSize:25,
    fontWeight:'bold',
    color:'black'
  }
});

export default SignupP;
