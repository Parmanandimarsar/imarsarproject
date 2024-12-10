import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  masterLoading: false,
  masterError: null,
  miscData: [],
  miscFilterData:[],
  HSNCodeData:[],
  getHSNCodeData:[],
  putHSNCodeData:[]
};

const masterSlice = createSlice({
  name: "masterSlice",
  initialState,
  reducers: {
    setMasterLoading: (state) => {
      state.masterLoading = true;
    },
    setMasterError: (state, action) => {
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
    setHSNCodeData: (state, action) => {
      state.HSNCodeData = action.payload;
      state.masterLoading = false;
    },
    setGetHSNCodeData: (state, action) => {
      state.getHSNCodeData = action.payload;
      state.masterLoading = false;
    },
    setPutHSNCodeData: (state, action) => {
      state.putHSNCodeData = action.payload;
      state.masterLoading = false;
    },
  },
});

export const {
  setMasterLoading,
  setMasterError,
  setMiscData,
  setMiscFilterData,
  setHSNCodeData,
  setGetHSNCodeData,
  setPutHSNCodeData,
} = masterSlice.actions;
export default masterSlice.reducer;
