// import Reaction from "./Reaction";
import { useEffect, useState } from "react";
// import { useParams } from "react-router";
import axios from 'axios';
import { baseURL } from '../url';
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import Reaction from '../components/Reaction'


export default function Itineraries({ route }) {

  let [activities, setActivities] = useState([]);
  const { idCity } = route.params;

  useEffect(() => {
    axios
      .get(`${baseURL}api/itineraries?citiId=${idCity}`)
      .then((res) => setActivities(res.data.data));
    // eslint-disable-next-line
  }, []);

  const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 30,
        textAlign: "center",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        textShadowColor: '#063970',
        fontWeight: 'bold',
    },
    text1: {
        color: '#fff',
        fontSize: 20,
        textAlign: "center",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        textShadowColor: '#063970',
    },
    text3: {
        color: '#fff',
        fontSize: 50,
        textAlign: "center",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        textShadowColor: '#063970',
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 20,
        resizeMode: "cover",
        alignSelf: "center",
    },
    container: {
        height: 400,
        width: 300,
        color: '#eaf2f4',
        backgroundColor: '#1f6e6b',
        borderRadius: 20,
        shadowColor: '#000',
        margin: 40,
        // marginTop: 30,

    },
    backimage:{
        width: '100%',
        height: '100%',
        justifyContent: "center",
    },
});

  return (
    <View >
        <ImageBackground source={require('../asset/background.jpg')} resizeMode="cover" style={styles.backimage}>
        <ScrollView >
            <Text style={styles.text3}>Itineraries</Text>
            {activities.length > 0 ? (
                activities.map((itinerary) => {
                        return (
                            <View style={styles.container}>
                                <Image source={{ uri: itinerary.photo[0] }} style={styles.image} />
                                <Text style={styles.text}>{itinerary.name}</Text>
                                <Text style={styles.text1}>Duration: {itinerary.duration}hs</Text>
                                <Text style={styles.text1}>Price: U$D{itinerary.price}</Text>
                               <View style={{flexDirection:'row'}} >
                                 <Reaction itineraryId={itinerary._id}/>
                            </View>
                            </View>
                        )
                    })) : (
                        <View>
                            <Text style={styles.text}>Not element found</Text>
                        </View>
                    )
                    }
        </ScrollView>
        </ImageBackground>
    </View>
  )
}



// import { View, Text } from 'react-native'
// import React from 'react'

// export default function Itineraries() {
//   return (
//     <View>
//       <Text>Itineraries</Text>
//       {itinerary.map((itinerary) => {
//                         return (
//                             <View>
//                                 <Image source={{ uri: itinerary.photo[0] }} style={styles.image} />
//                                 <Text style={styles.text}>{itinerary.name}</Text>
//                                 <Text style={styles.text}>Duration: {itinerary.duration}</Text>
//                                 <Text style={styles.text}>Price: {itinerary.price}</Text>
//                             </View>
//                         )
//                     })
//                     }
//     </View>
//   )
// }