// Components/Addparams/Footer.js

import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

function Footer(props) {
    const navigation = useNavigation()

    if (props.config == 1) {
        return (
            <View style={styles.config1}>
                <TouchableOpacity onPress={() => { navigation.navigate(props.prev, { params: props.params })  }}>
                    <Icon size={50} name='long-arrow-alt-left' type='font-awesome-5' color='white' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate(props.next, { params: props.params })  }}>
                    <Icon size={50} name='long-arrow-alt-right' type='font-awesome-5' color='white' />
                </TouchableOpacity>
            </View>
        )
    }
    else if (props.config == 2) {
        return (
            <View style={styles.config2}>
                <TouchableOpacity onPress={() => { navigation.navigate(props.prev, { params: props.params }) }}>
                    <Icon size={50} name='long-arrow-alt-left' type='font-awesome-5' color='white' />
                </TouchableOpacity>
            </View>
        )
    }
    else {
        return (
            <View>
                <Text>Error</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    config1: {
        justifyContent: "space-between",
        flexDirection: "row",
        width: "90%",
        position: "absolute",
        bottom: "5%",
    },
    config2: {
        alignSelf: "flex-start",
        marginLeft: "5%",
        position: "absolute",
        bottom: "5%"
    }
})

export default Footer
