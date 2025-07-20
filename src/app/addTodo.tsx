import { Alert, StyleSheet, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Customheader from '@/components/Customheader'
import MyButton from '@/components/MyButton'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store/store'
import { createTodo } from '@/store/reducer/todo'
import { router } from 'expo-router'

const AddTodo = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleAddTodo = async () => {
    try {
      if (!title.trim() || !description.trim()) {
        Alert.alert("Please add title and description")
      }

      // Add todo
      dispatch(createTodo({ title, description }))
      Alert.alert("Todo added")
      router.back()
    } catch (error) {
      Alert.alert("Something went wrong")
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Customheader title="Add Todo" isBackButton={true} />
      <Text style={styles.inputLabel}>Add Title</Text>
      <TextInput style={styles.input} placeholder='Enter todo' onChangeText={setTitle} />
      <Text style={styles.inputLabel}>Add Description</Text>
      <TextInput style={styles.description} placeholder='Enter todo' onChangeText={setDescription} multiline maxLength={100} />
      <MyButton title="Add Todo" onPress={handleAddTodo} />
    </SafeAreaView>
  )
}

export default AddTodo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  inputLabel: {
    fontSize: 20,
    fontFamily: "SpaceMono",
    textAlign: "center",
    color: "#000",
    marginTop: 20
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  description: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10

  },

})