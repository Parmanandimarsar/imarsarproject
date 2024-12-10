import { configureStore } from '@reduxjs/toolkit';
import masterReducer from "./slices/CreateSlices/masterSlice"

// Configure the Redux store
const store = configureStore({
  reducer: {
   // Add more reducers here as needed
   master: masterReducer,
   
  },
});

export default store;
