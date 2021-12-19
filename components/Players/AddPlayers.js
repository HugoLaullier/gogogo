import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Icon } from 'react-native-elements'
import Color from '../../constants/Color';
import Player from './Player';
import NewPlayer from './NewPlayer';
import ModifyPlayer from './ModifyPlayer';
import Footer from '../Utils/Footer';
import { useRoute } from '@react-navigation/native';


function AddPlayers(props) {
    const route = useRoute()
    let params = route.params.params
    
    const [modalAddVisible, setModalAddVisible] = React.useState(false);
    const [modalModifyVisible, setModalModifyVisible] = React.useState(false);
    const [players, _updatePlayers] = React.useState(params.players);
    const [changingNameIndex, changeChangingNameIndex] = React.useState();
    const [modifiedName, onModifyPlayer] = React.useState();

    const updatePlayers = (players) => {
        _updatePlayers(players)
        params.players = players
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ajouter des joueurs</Text>
            <TouchableOpacity style={styles.button}
                onPress={() => { setModalAddVisible(!modalAddVisible) }}>
                <Icon
                    name={'plus-circle'}
                    type='font-awesome-5'
                    color={Color.red}
                    size={60} />
            </TouchableOpacity>
            <NewPlayer modalAddVisible={modalAddVisible} setModalAddVisible={setModalAddVisible} updatePlayers={updatePlayers} players={players} />
            <ModifyPlayer modalModifyVisible={modalModifyVisible} setModalModifyVisible={setModalModifyVisible}
                updatePlayers={updatePlayers}
                players={players}
                changingNameIndex={changingNameIndex} 
                modifiedName={modifiedName} onModifyPlayer={onModifyPlayer}/>
            <FlatList style={styles.flatlist}
                numColumns={1}
                data={players}
                extraData={players, changingNameIndex}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => <Player key={index} id={index} name={item} updatePlayers={updatePlayers} players={players}
                    modalModifyVisible={modalModifyVisible} setModalModifyVisible={setModalModifyVisible}
                    changeChangingNameIndex={changeChangingNameIndex} onModifyPlayer={onModifyPlayer}/>
                }
                scrollEnabled={true}
            />
            <Footer config={1} prev={"Home"} next={"AddTeams"} params={params} />
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
    button: {
        marginBottom: "7%"
    },
    flatlist: {
        width: "80%",
        marginBottom: "25%"
    }
})

export default AddPlayers
