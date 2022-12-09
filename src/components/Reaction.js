import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import reactionActions from '../redux/actions/reactionActions'
import { View, Text, Image, StyleSheet} from 'react-native'


export default function Reaction(props) {
    const { token, id } = useSelector(state => state.userReducer)
    // const { reaction } = useSelector(state => state.reactionReducer)
    const dispatch = useDispatch()
    let { itineraryId } = props
    const { getReaction, updateReaction } = reactionActions
    const [reactions, setReaction] = useState([])
    const [like, setLike] = useState(true)


    useEffect(() => {
        dispatch(getReaction(itineraryId))
        .then(res => setReaction(res.payload.response))
    }, [like])
    // console.log(reaction)

    // async function reactioness() {
    //     let res = await dispatch(getReaction(itineraryId))
    //     setReaction(res.payload.response)
    // }
    console.log(itineraryId)
    function likeItinerary(e) {
        let name
        let icon 
        let iconBack
        reactions.data.map(react => {
            if (react.name === e.target.name) {
                name = react.name
                icon = react.icon
                iconBack = react.iconBack
            }
        })

        let data = {
            token,
            id: itineraryId,
            name,
        }
         dispatch(updateReaction(data))
            setLike(!like)
       
    }



    return (
        <>
            {reactions.success &&
                reactions.data.map((reaction) => {
                    // let res = reaction.userId.find(user => user._id === id)
                    // console.log(res)
                    // return (
                    // res ? (
                    //     <View key={reaction.id}>
                    //         <Image source={reaction.icon} name={reaction.name} alt={reaction.name}  width='25' onClick={likeItinerary} />
                    //         <Text>{reactions.lengthOfReactions[reaction.name]}</Text>
                    //     </View>
                    // ) : (
                     return(   
                     <View key={reaction.id}>
                        <Image source={{uri: reaction.iconBack}} style={{width: 20, height: 20}}name={reaction.name} alt={reaction.name} onClick={likeItinerary} />
                        <Text>{reactions.lengthOfReactions[reaction.name]}</Text>
                    </View> 
                    )
                    // ))
                })
            }
            </>
    )
}