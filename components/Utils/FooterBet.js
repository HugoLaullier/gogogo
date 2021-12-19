// Components/Addparams/FooterBet.js

import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Alert, Dimensions } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import Color from '../../constants/Color';

function FooterBet(props) {
    const navigation = useNavigation()

    if (props.config == 0) {
        return (
            <View style={styles.config0}>
                <TouchableOpacity onPress={() => {
                    if (props.params.players[props.id].team === undefined
                        || props.params.players[props.id].qty === undefined
                        || props.params.players[props.id].bet === undefined
                        || props.params.players[props.id].adv === undefined) {

                        Alert.alert(
                            'Petite biatch',
                            'Un champs est vide... corrige moi ça et vite!',
                            [
                                { text: 'Oui chef!' }
                            ]
                        )
                    }
                    else {
                        props.setSelectedTeam(props.params.players[props.id + 1].team)
                        props.onChangeQty(String(props.params.players[props.id + 1].qty))
                        props.onChangeBet(props.params.players[props.id + 1].bet)
                        props.setSelectedPlayer(props.params.players[props.id + 1].adv)
                        navigation.navigate(props.next, { params: props.params, id: props.id + 1 })
                    }
                }}>
                    <Icon size={50} name='long-arrow-alt-right' type='font-awesome-5' color='white' />
                </TouchableOpacity>
            </View>
        )
    }
    else if (props.config == 1) {
        return (
            <View style={styles.config1}>
                <TouchableOpacity onPress={() => {
                    props.setSelectedTeam(props.params.players[props.id - 1].team)
                    props.onChangeQty(String(props.params.players[props.id - 1].qty))
                    props.onChangeBet(props.params.players[props.id - 1].bet)
                    props.setSelectedPlayer(props.params.players[props.id - 1].adv)
                    navigation.navigate(props.prev, { params: props.params, id: props.id - 1 })
                }
                }>
                    <Icon size={50} name='long-arrow-alt-left' type='font-awesome-5' color='white' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    if (props.params.players[props.id].team === undefined
                        || props.params.players[props.id].qty === undefined
                        || props.params.players[props.id].bet === undefined
                        || props.params.players[props.id].adv === undefined) {

                        Alert.alert(
                            'Petite biatch',
                            'Un champs est vide... corrige moi ça et vite!',
                            [
                                { text: 'Oui chef!' }
                            ]
                        )
                    }
                    else {
                        props.setSelectedTeam(props.params.players[props.id + 1].team)
                        props.onChangeQty(String(props.params.players[props.id + 1].qty))
                        props.onChangeBet(props.params.players[props.id + 1].bet)
                        props.setSelectedPlayer(props.params.players[props.id + 1].adv)
                        navigation.navigate(props.next, { params: props.params, id: props.id + 1 })
                    }
                }
                }>
                    <Icon size={50} name='long-arrow-alt-right' type='font-awesome-5' color='white' />
                </TouchableOpacity>
            </View>
        )
    }
    else if (props.config == 2) {
        return (
            <View style={styles.config2}>
                <TouchableOpacity onPress={() => {
                    props.setSelectedTeam(props.params.players[props.id - 1].team)
                    props.onChangeQty(String(props.params.players[props.id - 1].qty))
                    props.onChangeBet(props.params.players[props.id - 1].bet)
                    props.setSelectedPlayer(props.params.players[props.id - 1].adv)
                    navigation.navigate(props.prev, { params: props.params, id: props.id - 1 })
                }
                }>
                    <Icon size={50} name='long-arrow-alt-left' type='font-awesome-5' color='white' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        if (props.params.players[props.id].team === undefined
                            || props.params.players[props.id].qty === undefined
                            || props.params.players[props.id].bet === undefined
                            || props.params.players[props.id].adv === undefined) {

                            Alert.alert(
                                'Petite biatch',
                                'Un champs est vide... corrige moi ça et vite!',
                                [
                                    { text: 'Oui chef!' }
                                ]
                            )
                        }
                        else {
                            navigation.navigate("Race", { params: props.params })
                        }
                    }
                    }>
                    <Text style={styles.go}>GO</Text>
                </TouchableOpacity>
            </View>
        )
    }
    else {
        return (
            <View>
                <Text>Error</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    config0: {
        alignSelf: "flex-end",
        marginLeft: "5%",
        position: "absolute",
        bottom: "5%"
    },
    config1: {
        justifyContent: "space-between",
        flexDirection: "row",
        width: "90%",
        position: "absolute",
        bottom: "5%",
    },
    config2: {
        alignSelf: "flex-start",
        marginLeft: "5%",
        position: "absolute",
        bottom: "5%"
    },
    button: {
        backgroundColor: Color.red,
        width: 0.3 * Dimensions.get('window').width,
        height: 0.3 * Dimensions.get('window').width,
        borderRadius: 90,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: "10%",
        left: 0.5 * Dimensions.get('window').width
    },
    go: {
        color: "white",
        fontSize: 25
    }
})

export default FooterBet
