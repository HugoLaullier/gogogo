import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Color from '../../constants/Color';
import { useRoute } from '@react-navigation/native';


function Race(props) {
    const route = useRoute()
    let params = route.params.params
    console.log(params)

    let stats = []
    for (var i = 0; i < params.teams.length; i++) {
        stats.push(<Text key={i} style={styles.step}>{params.teams[i].name}  : {params.teams[i].step} / 50</Text>)
    }

    let randomTeam = Math.floor(Math.random() * params.teams.length)

    let challenge = {
        text:"Votre équipe doit boire un total de 5 gorgées!",
        gain:2,
        team:randomTeam
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gogogo race biatches</Text>
            {stats}
            <Text style={styles.challengeTeam}>Challenge pour l'équipe {params.teams[randomTeam].name}</Text>
            <Text style={styles.challenge}>{challenge.text}</Text>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.louper}>
                    <Text style={styles.louperText}>LOUPER</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.valider}>
                    <Text style={styles.validerText}>VALIDER</Text>
                </TouchableOpacity>
            </View>
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
        fontSize: 35,
        fontWeight: "bold",
        marginTop: "10%",
        marginBottom:"10%"
    },
    step:   {
        color: "black",
        fontSize : 25,
        alignSelf: "flex-start",
        marginLeft:"5%",
    },
    challengeTeam: {
        marginTop:"20%",
        color: "black",
        fontSize:20,
        //backgroundColor: "#bdc5ca",
        paddingHorizontal: "3%",
        marginBottom: "5%",
    },
    challenge: {
        backgroundColor: "white",
        fontSize: 17,
        paddingTop: "3%",
        paddingBottom: "4%",
        borderRadius: 15,
        paddingHorizontal: "3%"
    },
    buttons: {
        flexDirection: 'row'
    },
    valider: {
        marginHorizontal: "17%",
        marginTop: "30%",
        backgroundColor: "#06d60d",
        paddingTop: "3%",
        paddingBottom: "4%",
        borderRadius: 15,
        paddingHorizontal: "3%"
    },
    validerText: {
        fontSize: 20
    },
    louper: {
        marginHorizontal: "17%",
        marginTop: "30%",
        backgroundColor: "#e60e0a",
        paddingTop: "3%",
        paddingBottom: "4%",
        borderRadius: 15,
        paddingHorizontal: "3%"
    },
    louperText: {
        fontSize: 20
    }
})

export default Race
