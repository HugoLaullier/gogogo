import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native';
import Color from '../../constants/Color';


function Home(props) {
    const navigation = useNavigation()
    const route = useRoute()
    let params
    if (route.params && route.params.params)
        params = route.params.params
    else
        params = {
            players: ["Georges", "Hugo"],
            teams: ["Yannick Hervé", "Ricard"]
        }



    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <Image style={styles.image} source={require('../../images/gogogo.png')} />
            </View>
            <Text style={styles.desc}>Prêt à boire?</Text>
            <TouchableOpacity style={styles.button}
                onPress={() => { navigation.navigate("AddPlayers", { params: params })}}
            >
                <Text style={styles.buttonText}>Jouer</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        alignItems: "center",
        flex: 1,
        paddingHorizontal: "7%",
        backgroundColor: Color.orange
    },
    container: {
        width: "100%",
        height: "30%",
        marginTop: "30%",
        marginBottom: "25%"
    },
    image: {
        width: "100%",
        height: "100%",
    },
    desc: {
        color: "black",
        fontSize: 20,
        textAlign: "center",
        fontStyle: "italic"
    },
    button: {
        backgroundColor: Color.red,
        width: 0.3 * Dimensions.get('window').width,
        height: 0.3 * Dimensions.get('window').width,
        borderRadius: 90,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: "10%"
    },
    buttonText: {
        color: "white",
        fontSize: 18
    }

})

export default Home
