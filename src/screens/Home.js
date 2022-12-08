import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export default function Home() {

const navigation = useNavigation();

  return (
    <View style={styles.container}>
            <StatusBar />
            <ImageBackground source={require('../asset/background.jpg')} resizeMode="cover" style={styles.image}>
    <View
    style={{ 
      justifyContent: 'center', 
        alignItems: 'center',
    }}>
      <Image source={require('../asset/logo-re.png')}
      style={{ 
        width: 120,
        height: 120,
        
      }} />
      <Text
      style={{ 
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: 'black',
        shadowOffset: {
          width: 5,
          height: 8,
        },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        
        // elevation: 5,
        color: 'black'
        
      }}
      >My Tinerary</Text>
      
      <TouchableOpacity
                    onPress={() => navigation.navigate("Cities")}
                    style={{
                      backgroundColor: "#1f6e6b",
                      width: 180,
                      height: 50,
                      borderRadius: 20,
                      justifyContent: "center",
                      marginBottom: 20,
                      marginTop: 20
                    }}
>
                    <Text
                        style={{
                            fontSize: 20,
                            textAlign: "center",
                            color: "white",
                        }}
                    >Cities</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Hotels")}
                    style={{
                        backgroundColor: "#1f6e6b",
                        width: 180,
                        height: 50,
                        borderRadius: 20,
                        justifyContent: "center",
                        marginBottom: 20
                    }}
>
                    <Text
                        style={{
                            fontSize: 20,
                            textAlign: "center",
                            color: "white",
                        }}
                    >Hotels</Text>
                </TouchableOpacity>
    </View>
    </ImageBackground>
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      height: height * 0.88,
      width: width,
      alignItems: "center",
  },
  image: {
      flex: 1,
      justifyContent: "center",
      width: "100%",
      height: "100%",
  },
});
