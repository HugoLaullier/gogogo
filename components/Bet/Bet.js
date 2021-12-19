import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Color from '../../constants/Color';
import { useRoute } from '@react-navigation/native';
import FooterBet from '../Utils/FooterBet'


function Bet(props) {
    const route = useRoute()
    let params = route.params.params
    let id = route.params.id
    let name = params.players[id].name

    
    const [selectedTeam, _setSelectedTeam] = React.useState(params.players[id].team);
    const setSelectedTeam = (team) => {
        _setSelectedTeam(team)
        params.players[id].team = team
    }

    let itemsTeam = []
    itemsTeam.push(<Picker.Item key={'none'} label={undefined} value={undefined} />)
    for (var i = 0; i < params.teams.length; i++) {
        itemsTeam.push(<Picker.Item label={params.teams[i].name} value={params.teams[i].name} key={i} />)
    }

    const [selectedQty, _onChangeQty] = React.useState(String(params.players[id].qty));
    const onChangeQty = (qty) => {
        _onChangeQty(qty)
        params.players[id].qty = parseInt(qty)
    }
    
    
    const [selectedBet, _onChangeBet] = React.useState(params.players[id].bet);
    const onChangeBet = (bet) => {
        _onChangeBet(bet)
        params.players[id].bet = bet
    }
    
    
    const [selectedPlayer, _setSelectedPlayer] = React.useState(params.players[id].adv);
    const setSelectedPlayer = (adv) => {
        _setSelectedPlayer(adv)
        params.players[id].adv = adv
    }
    
    let itemsPlayer = []
    itemsPlayer.push(<Picker.Item key={'none'} label={undefined} value={undefined} />)
    for (var i = 0; i < params.players.length; i++) {
        if (i != id) {
            itemsPlayer.push(<Picker.Item label={params.players[i].name} value={params.players[i].name} key={i} />)
        }
    }
    
    let config
    if (id == 0) {
        config=0
    }
    else if (id == params.players.length - 1) {
        config=2
    }
    else {
        config=1
    }
     

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Faites vos jeux</Text>
            <Text style={styles.name}>{name}, dis nous tout!</Text>
            <Text style={styles.prop}>Quelle team?</Text>
            <Picker
                mode={'modal'}
                selectedValue={selectedTeam}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setSelectedTeam(itemValue)}
            >
                {itemsTeam}
            </Picker>
            <Text style={styles.prop}>Tu mises quoi?</Text>
            <View style={styles.inputArea}>
                <TextInput
                    keyboardType='numeric'
                    style={styles.inputQty}
                    multiline={false}
                    maxLength={2}
                    onChangeText={onChangeQty}
                    value={selectedQty} />
                <TextInput
                    autoCapitalize='none'
                    style={styles.inputBet}
                    multiline={false}
                    onChangeText={onChangeBet}
                    value={selectedBet} />
            </View>
            <Text style={styles.prop}>Qui va prendre cher si tu gagnes?</Text>
            <Picker
                mode={'modal'}
                selectedValue={selectedPlayer}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setSelectedPlayer(itemValue)}
            >
                {itemsPlayer}
            </Picker>
            <FooterBet config={config} prev={"Bet"} next={"Bet"} params={params} id={id} setSelectedTeam={_setSelectedTeam} onChangeQty={_onChangeQty}
        onChangeBet={_onChangeBet} setSelectedPlayer={_setSelectedPlayer} />
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
    name: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: "5%"
    },
    prop: {
        color: "black",
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: "5%",
        marginTop: "8%",
        marginLeft: "5%",
        alignSelf: "flex-start"
    },
    picker: {
        backgroundColor: "white",
        width: "70%"
    },
    inputQty: {
        backgroundColor: "white",
        width: "10%",
        padding: "2%",
        textAlign: "center",
        marginHorizontal: "3%",
    },
    inputBet: {
        backgroundColor: "white",
        width: "60%",
        padding: "2%",
        textAlign: "center",
        marginHorizontal: "3%",
    },
    inputArea: {
        flexDirection: "row",
    }
})

export default Bet
