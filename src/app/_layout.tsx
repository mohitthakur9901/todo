import { persist, store } from '@/store/store';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import 'react-native-reanimated';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

export default function RootLayout() {

  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <StatusBar barStyle="light-content" translucent={false} backgroundColor={"#000000"} />
        <Stack  screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="home" />
          <Stack.Screen name="addTodo" />
        </Stack>
      </PersistGate>
    </Provider>

  );
}
