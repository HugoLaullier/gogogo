import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Icon } from 'react-native-elements'


function Team(props) {
    let teams = props.teams

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.player}>{props.name}</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity onPress={() => {props.changeChangingNameIndex(props.id); props.onModifyPlayer(props.name); props.setModalModifyVisible(!props.modalModifyVisible);}}>
                    <Icon
                        style={styles.btn}
                        name={'pencil-alt'}
                        type='font-awesome-5'
                        size={25} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { teams.splice(teams.indexOf(props.name), 1); props.updateTeams([...teams]);}}>
                    <Icon
                        style={styles.btn}
                        name={'trash-alt'}
                        type='font-awesome-5'
                        size={25} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: "8%",
        paddingHorizontal: "5%",
        marginBottom: "3%",
        backgroundColor: "white",
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    player: {
        fontSize: 20,
    },
    buttons: {
        flexDirection: "row",
        width: "30%"
    },
    btn: {
        marginHorizontal: "15%"
    },
    textContainer: {
        width: "70%"
    }

})

export default Team
