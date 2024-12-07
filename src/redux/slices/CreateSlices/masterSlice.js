import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  masterLoading: false,
  masterError: null,
  miscData: [],
  miscFilterData:[],
};

const masterSlice = createSlice({
  name: "masterSlice",
  initialState,
  reducers: {
    setMasterLoading: (state) => {
      state.masterLoading = true;
    },
    setmasterError: (state, action) => {
      state.masterError = action.payload;
      state.masterLoading = false;
    },
    setMiscData: (state, action) => {
      state.miscData = action.payload;
      state.masterLoading = false;
    },
    setMiscFilterData: (state, action) => {
      state.miscFilterData = action.payload;
      state.masterLoading = false;
    },
   
  },
});

export const {
  setMasterLoading,
  setMasterError,
  setMiscData,
  setMiscFilterData
  
} = masterSlice.actions;
export default masterSlice.reducer;
