import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';
import { deleteTodo, updateTodo } from '@/store/reducer/todo';
import MyButton from './MyButton';
import Customheader from './Customheader';
import { SafeAreaView } from 'react-native-safe-area-context';

interface TodoCardProps {
  id: number;
  title: string;
  description: string;
}

const TodoCard = ({ item }: { item: TodoCardProps }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);

  const handleUpdateTodo = () => {
    if (!title.trim()) {
      Alert.alert('Title is required');
      return;
    }

    dispatch(updateTodo({ id: item.id, title, description }));
    setVisible(false);
    Alert.alert('Todo updated');
  };

  return (
    <View style={styles.todoCard}>
      <View style={styles.todoHeader}>
        <Text style={styles.todoTitle}>{item.title}</Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity onPress={() => setVisible(true)}>
            <EvilIcons name="pencil" size={28} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(deleteTodo(item.id))}>
            <AntDesign name="delete" size={22} color="#FF4C4C" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.todoDescription}>{item.description}</Text>

      {/* Modal for updating todo */}
      <Modal visible={visible} animationType="slide" onRequestClose={() => setVisible(false)}>
        <SafeAreaView style={styles.modalContainer}>
          <Customheader title="Update Todo" isBackButton={false} />
          <ScrollView contentContainerStyle={styles.modalContent}>
            <Text style={styles.label}>Title</Text>
            <TextInput
              style={styles.input}
              placeholder="Update title"
              value={title}
              onChangeText={setTitle}
            />

            <Text style={styles.label}>Description</Text>
            <TextInput
              style={styles.textArea}
              placeholder="Update description"
              value={description}
              onChangeText={setDescription}
              multiline
              numberOfLines={4}
              maxLength={100}
            />

            <MyButton title="Update Todo" onPress={handleUpdateTodo} />

            <TouchableOpacity onPress={() => setVisible(false)} style={styles.cancelButton}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default TodoCard;



const styles = StyleSheet.create({
  todoCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  todoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todoTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#333',
    fontFamily: 'SpaceMono',
    flex: 1,
    paddingRight: 12,
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    top: 15
  },
  todoDescription: {
    fontSize: 14,
    color: '#555',
    marginTop: 8,
    fontFamily: 'SpaceMono',
    lineHeight: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modalContent: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 6,
    fontFamily: 'SpaceMono',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 10,
    fontSize: 14,
    fontFamily: 'SpaceMono',
    marginBottom: 16,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 10,
    fontSize: 14,
    fontFamily: 'SpaceMono',
    height: 100,
    textAlignVertical: 'top',
    marginBottom: 16,
  },
  cancelButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  cancelText: {
    fontSize: 16,
    color: '#0090B0',
    fontFamily: 'SpaceMono',
  },
});


