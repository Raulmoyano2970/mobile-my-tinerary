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
          input:{
            padding: 3,
            fontSize: 16,
            border: 1,
            borderRadius: 5,
            // outline: 'none',
            // box-shadow: 3px 3px 5px rgba(3, 3, 3, 0.654);
            textAlign: 'center',
          },
        submit: {
            alignItems: 'center',
            justifyContent: 'center',
            margin: 8,
            border: 2,
            bordeRadius: 10,
            padding: 10,
            gap: 2,
            backgroundColor: '#eaf2f4',
            fontWeight: 'bold'
        },
      });


    return (
        <View>
            <ImageBackground source={require('../asset/background.jpg')} resizeMode="cover" style={styles.backimage}>
                <Text style={styles.subtitle}>Create your account</Text>
                <TextInput style={styles.input} placeholder="Name" onChangeText={(e) => handleInput(e, "name")}/>
                <TextInput style={styles.input} placeholder="LastName" onChangeText={(e) => handleInput(e, "lastName")}/>
                <TextInput style={styles.input} placeholder="Age" onChangeText={(e) => handleInput(e, "age")}/>
                <TextInput style={styles.input} placeholder="Photo" onChangeText={(e) => handleInput(e, "photo")}/>
                <TextInput style={styles.input} placeholder="Email" onChangeText={(e) => handleInput(e, "email")}/>
                <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} password={true} onChangeText={(e) => handleInput(e, "password")}/>
                <View >
                    <Text style={styles.submit} onPress={handleSubmit}>Create account</Text>
                </View>
            </ImageBackground>
        </View>
    )
}
