import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const MyButton = ({ title, onPress }: { title: string, onPress: () => void }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default MyButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#0090B0",
        height: 40,
        width: 200,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        alignSelf: "center"
    },
    text: {
        fontSize: 20,
        fontFamily: "SpaceMono",
        textAlign: "center",
        color: "#fff"
    }
})