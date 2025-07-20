import AddTodoButton from '@/components/AddTodoButton';
import Customheader from '@/components/Customheader';
import TodoCard from '@/components/TodoItem';
import {  RootState } from '@/store/store';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useSelector } from 'react-redux';


const Home = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);


 

  return (
    <SafeAreaView style={styles.container}>
      <Customheader title="Home Page" isBackButton={false} />

      <FlatList
        data={todos}
        renderItem={({ item }) => <TodoCard item={item} />}

        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={todos.length === 0 ? styles.emptyList : styles.listContainer}
        ListEmptyComponent={() => (
          <View style={styles.emptyWrapper}>
            <Image
              style={styles.emptyListImage}
              source={require('../../assets/images/todo.jpg')}
            />
            <Text style={styles.emptyText}>No todos yet. Tap the + button to add one!</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />

      <AddTodoButton />
    </SafeAreaView>
  );
};

export default Home;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 120,
  },
  emptyList: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  emptyWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    textAlign: 'center',
    color: '#777',
    fontSize: 16,
    fontFamily: 'SpaceMono',
    marginTop: 16,
  },
  emptyListImage: {
    height: 260,
    width: 260,
    resizeMode: 'contain',
  },
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
  },
  todoDescription: {
    fontSize: 14,
    color: '#555',
    marginTop: 8,
    fontFamily: 'SpaceMono',
    lineHeight: 20,
  },
  deleteButton: {
    height: 40,
    width: 40,
    top: 20,
  }
});
