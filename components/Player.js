import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Icon } from 'react-native-elements'
import Color from '../constants/Color.';


function Player(props) {
    return (
        <View>
            <Text style={styles.player}>{props.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    player : {
        textAlign:"center"
    }

})

export default Player
