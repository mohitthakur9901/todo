import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from "redux-persist"
import rootReducer from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';


const persistConfig = {
    key : "root",
    version : 1,
    storage : AsyncStorage,
    blacklist: [],
    whitelist:["todo"]
}


const persistedReducer = persistReducer(persistConfig , rootReducer);



export const store = configureStore({
    reducer : persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['FLUSH', 'REHYDRATE', 'PAUSE', 'PERSIST', 'PURGE', 'REGISTER'],
      },
    }),
})



export const persist = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch