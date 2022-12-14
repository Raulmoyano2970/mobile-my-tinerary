import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function User() {
    const [user, setUser] = useState({
        name: 'name',
        lastName: 'last name',
        email: 'email'
    })

    useEffect(() => {

        AsyncStorage.getItem('user')
            .then(data => setUser(JSON.parse(data)))
            .catch(err => console.log(err))

    }, []);

    return (
        <View style={styles.container}>
            <Image style={{ fontSize: 30 }}>{user.photo}</Image>
            <Text style={{ fontSize: 30 }}>{user.name}</Text>
            <Text style={{ fontSize: 30 }}>{user.lastName}</Text>
            <Text style={{ fontSize: 20 }}>{user.email}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});