import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  miscData: [],
  
};

const masterSlice = createSlice({
  name: "masterSlice",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setMiscData: (state, action) => {
      state.miscData = action.payload;
      state.loading = false;
    },
    
   
  },
});

export const {
  setLoading,
  setError,
  setMiscData,
 
  
} = masterSlice.actions;
export default masterSlice.reducer;
