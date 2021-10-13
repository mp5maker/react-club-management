import { configureStore  } from "@reduxjs/toolkit";
// @ts-ignore
import storage from 'redux-persist/lib/storage'
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from 'redux-thunk'
import themeReducer from "./themeReducer";
import languageReducer from "./languageReducer";
import sidebarReducer from "./sidebarReducer";

const reducers = combineReducers({
  theme: themeReducer,
  language: languageReducer,
  sidebar: sidebarReducer
})

const persistConfiguration = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfiguration, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})

export default store