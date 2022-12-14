import { View, Text, StyleSheet, TextInput, Button, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function SignIn(props) {


  const handleSubmit = () => {
    let user = {
      name: 'Oscar',
      lastName: 'Belondi',
      email: 'oscar22@gmail.com'
    }

    console.log('Ingresando...');

    AsyncStorage.setItem('user', JSON.stringify(user))
      .catch(err => console.log(err))
  }

  const navigateCounter = () => {
    props.navigation.navigate('Counter')
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
  })
  
  return (
    <View>
        <ImageBackground source={require('../asset/background.jpg')} resizeMode="cover" style={styles.backimage}>
            <Text style={styles.textTitle}>Sign In</Text>
            <TextInput style={styles.input} placeholder="Email" onChangeText={(e) => handleInput(e, "email")}/>
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} password={true} onChangeText={(e) => handleInput(e, "password")}/>
            <View >
            <Button style={styles.submit} onPress={handleSubmit} title='Enviar' />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Profile", { idHotel: hotel._id })}
                    style={{
                        backgroundColor: "#eaf2f4",
                        width: 110,
                        height: 50,
                        borderRadius: 20,
                        justifyContent: "center",
                        marginBottom: 20,
                        marginTop: 20,
                    }}
                    >
                    <Text
                        style={{
                            fontSize: 20,
                            textAlign: "center",
                            color: "#1f6e6b",
                            fontWeight: 'bold',
                        }}
                    >Profile</Text>
                </TouchableOpacity>
        </ImageBackground>
    </View>
  )

  // return (
  //   <View style={styles.container}>
  //     <Text>Login</Text>
  //     <TextInput placeholder='Email' />
  //     <TextInput placeholder='Contraseña' />
  //     <Button onPress={handleSubmit} title='Enviar' />
  //   </View>
  // )
}


