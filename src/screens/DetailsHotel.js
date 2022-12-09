import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { baseURL } from '../url';
import { useNavigation } from '@react-navigation/native';

export default function DetailsHotel({ route }) {

    let [hotels, setHotels] = useState([])
    const { hotel } = route.params;
    const navigation = useNavigation();


    useEffect(() => {
        axios.get(`${baseURL}api/hotelId=${hotel._id}`)
            .then(res => {
                setHotels(res.data.data)
            })
            .catch(err => console.log(err))
    }, [])
    
    const styles = StyleSheet.create({
        text: {
            color: '#fff',
            fontSize: 20,
            textAlign: "center",
        },
        textTitle: {
            color: '#fff',
            fontSize: 35,
            textAlign: "center",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10,
            textShadowColor: '#063970',
            fontWeight: 'bold',
        },
        container: {
            width: '100%',
            height: '100%',
        },
        containerData: {
            flex: 1,
            // flexDirection: "column",
            // flex-wra: wrap,
            height: 400,
            width: 300,
            color: '#eaf2f4',
            backgroundColor: '#1f6e6b',
            borderRadius: 20,
            shadowColor: '#000',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 40,

        },
        backimage: {
            width: '100%',
            height: '100%',
            alignContent: "center",
            justifyContent: "center"
        },
        image: {
            width: '100%',
            height: 250,
            borderRadius: 20,
            resizeMode: "cover",
            alignSelf: "center",
        },
        backimage:{
            width: '100%',
            height: '100%',
            justifyContent: "center",
        },
        fixToText: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
        },
        button: {
            width: 500,
            height: 100,
        },
    });

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../asset/background.jpg')} resizeMode="cover" style={styles.backimage}>
                <View style={styles.containerData} >
                <Image source={{ uri: hotel.photo[2]}} resizeMode="cover" style={styles.image}/>
                    <Text style={styles.textTitle}>{hotel.name}</Text>
                    <Text style={styles.text}>Capacity:{hotel.capacity}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Shows", { idHotel: hotel._id })}
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
                    >Show</Text>
                </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

