import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Modal, Text, Alert } from 'react-native'



function ModifyPlayer(props) {
    const inputRef = React.useRef(null);
    return (
        <Modal
            onShow={() => {
                inputRef.current.focus()
            }}
            animationType="slide"
            transparent={true}
            visible={props.modalModifyVisible}
            onRequestClose={() => {
                props.setModalModifyVisible(!props.modalModifyVisible);
            }}
        >
            <View style={styles.modal}>
                <View style={styles.box}>
                    <TextInput
                        ref={inputRef}
                        style={styles.input}
                        multiline={false}
                        autoFocus={false}
                        onChangeText={props.onModifyPlayer}
                        value={props.modifiedName}
                    />
                </View>
                <TouchableOpacity style={styles.action} onPress={
                    () => {
                        if (props.modifiedName == undefined || props.modifiedName == '') {
                            Alert.alert(
                                'You fucked up',
                                'Hey petit, fais gaffe, tu as oublié de mettre un nom!',
                                [
                                    { text: 'Oui chef!' }
                                ]
                            )
                        }
                        else if (props.players[props.changingNameIndex] != props.modifiedName && props.players.includes(props.modifiedName)) {
                            Alert.alert(
                                'You fucked up',
                                'Hey petit, fais gaffe, tu as déjà ajouter ce joueur!',
                                [
                                    { text: 'Oui chef!' }
                                ]
                            )
                        }
                        else {
                            props.players[props.changingNameIndex] = props.modifiedName;
                            props.updatePlayers(props.players);
                            props.setModalModifyVisible(!props.modalModifyVisible); 
                        }
                    }}>
                    <Text>Modifier</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: '#2c507f',
        opacity: 0.9,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: 'center',
        width: "90%",
        borderRadius: 10,
        height: 200,
        marginTop: "45%"
    },
    box: {
        backgroundColor: "white",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
        marginBottom: "10%"
    },
    input: {
        color: "black",
        textAlign: "center",
        fontSize: 15,
        width: "60%"
    },
    action:
    {
        padding: "3%",
        borderRadius: 7,
        backgroundColor: '#c258c7'
    }
})

export default ModifyPlayer