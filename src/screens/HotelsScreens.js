import React from "react";
import HotelCard from "../components/HotelCard";
import { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import hotelsActions from '../redux/actions/hotelsActions'
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, Dimensions, ScrollView } from 'react-native'
import { TextInput } from "react-native-gesture-handler";

export default function HotelsScreens(props) {
  
  
  const dispatch = useDispatch()
  const [searchHotels, setSearchHotels] = useState('')
  const {hotels, search} = useSelector(store => store.hotelReducer)
  const { getHotels, filterHotels } = hotelsActions

  
  useEffect(() => {
    if(search){
        let info ={ 
            search: search, 
        }
        dispatch(filterHotels(info))
        setSearchHotels(search)
        
    }else{
        dispatch(getHotels())
    }
    //eslint-disable-next-line

    
}, []) 

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 30,
        textAlign: "center",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        marginTop: 30,
    },
    container: {
        width: '100%',
    },
    backimage:{
        width: '100%',
        height: '100%',
        justifyContent: "center",
    },
    containerCard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        borderRadius: 20,
    },
    textInput: {
        backgroundColor: '#fff',
        width: '90%',
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    }
});

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../asset/background.jpg')} resizeMode="cover" style={styles.backimage}>
      <ScrollView>
        <Text style={styles.text}>Hotels</Text>
        <TextInput style={styles.textInput} placeholder="Search" onChangeText={(text)=>{
            setSearchHotels(text)
            let data = {
                search: text
            }

            dispatch(filterHotels(data))
        }}/>
        <View style={styles.containerCard}>
            {hotels.map(hotel => <HotelCard key={hotel._id}hotel={hotel} name={hotel.name} navigation={props.navigation} continent={hotel.continent} photo={hotel.photo[0]}/>)}

        </View>
      </ScrollView>
      </ImageBackground>
    </View>
  )
}