import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Icon } from 'react-native-elements'
import Color from '../../constants/Color';
import Team from './Team';
import NewTeam from './NewTeam';
import ModifyTeam from './ModifyTeam';
import Footer from '../Utils/Footer';
import { useRoute } from '@react-navigation/native';


function AddTeams(props) {
    const route = useRoute()
    let params = route.params.params
    
    const [modalAddVisible, setModalAddVisible] = React.useState(false);
    const [modalModifyVisible, setModalModifyVisible] = React.useState(false);
    const [teams, _updateTeams] = React.useState(params.teams);
    const [changingNameIndex, changeChangingNameIndex] = React.useState();
    const [modifiedName, onModifyTeam] = React.useState();

    const updateTeams = (teams) => {
        _updateTeams(teams)
        params.teams = teams
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ajouter des teams</Text>
            <TouchableOpacity style={styles.button}
                onPress={() => { setModalAddVisible(!modalAddVisible) }}>
                <Icon
                    name={'plus-circle'}
                    type='font-awesome-5'
                    color={Color.red}
                    size={60} />
            </TouchableOpacity>
            <NewTeam modalAddVisible={modalAddVisible} setModalAddVisible={setModalAddVisible} updateTeams={updateTeams} teams={teams} />
            <ModifyTeam modalModifyVisible={modalModifyVisible} setModalModifyVisible={setModalModifyVisible}
                updateTeams={updateTeams}
                teams={teams}
                changingNameIndex={changingNameIndex} 
                modifiedName={modifiedName} onModifyTeam={onModifyTeam}/>
            <FlatList style={styles.flatlist}
                numColumns={1}
                data={teams}
                extraData={teams, changingNameIndex}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => <Team key={index} id={index} name={item} updateTeams={updateTeams} teams={teams}
                    modalModifyVisible={modalModifyVisible} setModalModifyVisible={setModalModifyVisible}
                    changeChangingNameIndex={changeChangingNameIndex} onModifyTeam={onModifyTeam}/>
                }
                scrollEnabled={true}
            />
            <Footer config={1} prev={"AddPlayers"} next={"Recap"} params={params} />
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

export default AddTeams
