import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Color from '../../constants/Color';
import Footer from '../Utils/Footer';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'
import { Dimensions, Alert } from 'react-native';



function Recap(props) {
    const navigation = useNavigation()
    const route = useRoute()
    let params = route.params.params
    let players = params.players.join(', ')
    let teams = params.teams.join(', ')

    let new_params =  {
        players : [],
        teams : []
    }

    params.players.forEach(pl => {
        new_params.players.push({
            name: pl,
            team : "Ricard",
            qty: 1,
            bet : "gorgée",
            adv : "Hugo"
        })        
    });

    params.teams.forEach(tm => {
        new_params.teams.push({
            name: tm,
            step : 0
        })        
    });

 
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recap</Text>
            <ScrollView style={styles.params}>
                <Text style={styles.attr_text}><Text style={styles.attr}>Joueurs : </Text>{players}</Text>
                <Text style={styles.attr_text}><Text style={styles.attr}>Teams : </Text>{teams}</Text>
                <TouchableOpacity style={styles.go} onPress={() => { 
                    if (params.players.length < 2) {
                        Alert.alert(
                            'You fucked up',
                            'Jeune chenapan, il faut au moins deux joueurs pour commencer une partie!',
                            [
                                { text: 'Oui chef!' }
                            ]
                        )
                    }
                    else if (params.teams.length < 2) {
                        Alert.alert(
                            'You fucked up',
                            'Grand fou, il faut au moins deux teams pour commencer une partie!',
                            [
                                { text: 'Oui chef!' }
                            ]
                        )
                    }
                    else {
                        navigation.navigate("Bet", { params: new_params, id:0}) }
                    }
                    }>
                    <Text style={styles.goText}>Allez zé parti</Text>
                </TouchableOpacity>
            </ScrollView>
            <Footer config={2} prev={"AddTeams"} params={params} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.orange,
        flex: 1,
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        marginTop: "10%",
        marginBottom: "5%"
    },
    params: {
        width: "100%"
    },
    attr: {
        color: "white",
        fontSize: 17,
        fontWeight: "bold",
    },
    attr_text: {
        color: "white",
        fontSize: 15,
        marginTop: "5%",
        marginLeft: "5%"
    },
    go: {
        height: "15%",
        width: "50%",
        marginBottom: Dimensions.get('window').height * 0.07 + 50,
        backgroundColor: '#cb0c00',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "10%",
        alignSelf: "center"
    },
    goText: {
        color: "white",
        fontSize: 20
    }
})

export default Recap
