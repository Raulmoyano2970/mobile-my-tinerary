import React from "react";
import CityCard from "../components/CityCard";
import { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import citiesActions from '../redux/actions/citiesActions'
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, Dimensions, ScrollView } from 'react-native'
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native'

export default function CitiesScreens(props) {
  
  
  const dispatch = useDispatch()
  const [searchCities, setSearchCities] = useState('')
  const {cities, search} = useSelector(store => store.cityReducer)
  const { getCities, filterCities } = citiesActions
  const navigation = useNavigation();
  
  useEffect(() => {
    if(search){
        let info ={ 
            search: search, 
        }
        dispatch(filterCities(info))
        setSearchCities(search)
        
    }else{
        dispatch(getCities())
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
        <Text style={styles.text}>Cities</Text>
        <TextInput style={styles.textInput} placeholder="Search" onChangeText={(text)=>{
            setSearchCities(text)
            let data = {
                search: text
            }
            dispatch(filterCities(data))
        }}/>
        <View style={styles.containerCard}>
            {cities.map(city => <CityCard key={city._id} city={city} name={city.name} navigation={props.navigation} continent={city.continent} photo={city.photo} />)}
            
        </View>
      </ScrollView>
      </ImageBackground>
    </View>
  )
}