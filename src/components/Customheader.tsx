import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';

import { router } from 'expo-router';

const Customheader = ({ title, isBackButton }: { title: string, isBackButton?: boolean }) => {

  return (
    <SafeAreaView style={styles.container}>
      {
        isBackButton && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back-circle-outline" size={28} color="#fff" />
          </TouchableOpacity>
        )
      }
      <Text style={styles.text}>{title}</Text>
    </SafeAreaView>
  );
};


export default Customheader

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0090B0",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  text: {
    fontSize: 20,
    fontFamily: "SpaceMono",
    textAlign: "center",
    color: "#fff",
  },
  backButton: {
    position: "absolute",
    left: 20,
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center"
  }
})