// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
// import sidebarReducer from '../../features/sidebar/sidebarSlice';
import sidebarReducer from './features/sidebar/sidebarSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});
