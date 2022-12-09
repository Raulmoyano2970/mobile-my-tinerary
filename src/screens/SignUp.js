import { View, ImageBackground, StyleSheet, Text, TextInput, Alert } from 'react-native'
import React, {useState} from 'react'
import { baseURL } from '../url';
import axios from 'axios';

export default function SignUp(props) {
    const [userData, setUserData] = useState({
        name: '',
        lastName: '',
        age: '',
        photo: '',
        email: '',
        password: '',
    })
    
    const handleInput = (e, name, value) => {
        setUserData({
            ...userData,
            [name]: e || value
        })
    }

    const handleSubmit = async () => {
        try {
            const res = await axios.post(`${baseURL}api/auth/sign-up/`, userData)
            if (res.data.success) {
                Alert.alert('Success', res.data.message)
                props.navigation.navigate('Home')
            } else {
                Alert.alert('Error', res.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            gap: 18,
            justifyContent: 'center',
            width: '30%',
            height: 437,
            backgroundColor: '#d7e3ff55',
            borderRadius: 20,
          },
          textTitle: {
            color: '#1f6e6b',
            fontSize: 40,
            textAlign: "center",
            // textShadowOffset: { width: -1, height: 1 },
            // textShadowRadius: 10,
            // textShadowColor: '#063970',
            fontWeight: 'bold',
        },
          input:{
            padding: 3,
            fontSize: 16,
            borderWidth: 1,
            borderRadius: 10,
            // outline: 'none',
            // box-shadow: 3px 3px 5px rgba(3, 3, 3, 0.654);
            textAlign: 'center',
            backgroundColor: 'rgba(255,255,255,0.5)',
          },
        submit: {
            alignItems: 'center',
            justifyContent: 'center',
            margin: 8,
            border: 2,
            bordeRadius: 20,
            padding: 10,
            gap: 2,
            backgroundColor: '#eaf2f4',
            fontWeight: 'bold'
        },
        backimage:{
            width: '100%',
            height: '100%',
            justifyContent: "center",
        },
      });


    return (
        <View>
            <ImageBackground source={require('../asset/background.jpg')} resizeMode="cover" style={styles.backimage}>
                <Text style={styles.textTitle}>Sign Up</Text>
                <TextInput style={styles.input} placeholder="Name" onChangeText={(e) => handleInput(e, "name")}/>
                <TextInput style={styles.input} placeholder="LastName" onChangeText={(e) => handleInput(e, "lastName")}/>
                <TextInput style={styles.input} placeholder="Age" onChangeText={(e) => handleInput(e, "age")}/>
                <TextInput style={styles.input} placeholder="Photo" onChangeText={(e) => handleInput(e, "photo")}/>
                <TextInput style={styles.input} placeholder="Email" onChangeText={(e) => handleInput(e, "email")}/>
                <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} password={true} onChangeText={(e) => handleInput(e, "password")}/>
                <View style={styles.submit}>
                    <Text onPress={handleSubmit}>Create</Text>
                </View>
            </ImageBackground>
        </View>
    )
}
