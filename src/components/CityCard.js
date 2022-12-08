import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


export default function CityCard(props) {

    let { photo, name, navigation, city } = props;

    let NavigationContainer = () => {
        navigation.navigate('CitiesDetails', { city })
    }

    const styles = StyleSheet.create({
        text: {
            color: '#fff',
            fontSize: 30,
            textAlign: "center",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 15,
            textShadowColor: 'green',
            marginTop: 30,
        },
        backimage: {
            width: '100%',
            height: '100%',
            justifyContent: "center",
            alignItems: "center",
        },
        container: {
            borderRadius: 5,
            overflow: 'hidden',
            width: 300,
            height: 200,
            margin: 10,
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 1,
            shadowRadius: 10,
            shadowColor: 'green',
        },
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={NavigationContainer}>
                <ImageBackground source={{ uri: photo }} resizeMode="cover" style={styles.backimage}>
                    <Text style={styles.text}>{name}</Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}