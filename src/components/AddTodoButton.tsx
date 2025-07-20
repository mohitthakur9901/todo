import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Fontisto from '@expo/vector-icons/Fontisto';
import { router } from 'expo-router';

const AddTodoButton = () => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => router.navigate("/addTodo")}
      activeOpacity={0.7}
    >
      <Fontisto name="plus-a" size={22} color="#fff" />
    </TouchableOpacity>
  );
};

export default AddTodoButton;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 30,
    right: 24,
    backgroundColor: '#0090B0',
    borderRadius: 30,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
  },
});
