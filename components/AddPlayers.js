import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Icon } from 'react-native-elements'
import Color from '../constants/Color.';
import Player from './Player';


function AddPlayers(props) {
    let players = []

    players.push("Grégory")
    players.push("AmandineDansUnAn")
    players.push("Michel")
    players.push("Woo-Seok")
    

    console.log(players)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ajouter des joueurs</Text>
            <TouchableOpacity>
                <Icon
                    name={'plus-circle'}
                    type='font-awesome-5'
                    color={Color.red}
                    size={60} />
            </TouchableOpacity>
            <FlatList
                numColumns={1}
                data={players}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => <Player key={index} name={item}/>}
                scrollEnabled={true}
            />
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
    }

})

export default AddPlayers
