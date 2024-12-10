import {
  setMasterLoading,
  setMasterError,
  setMiscData,
  setMiscFilterData,
  setHSNCodeData,
  setGetHSNCodeData,
  setPutHSNCodeData
} from "../CreateSlices/masterSlice";
import { postData, getData ,putData} from "../../../Api/apiServices";

// Fetch State Data
export const fetchMiscData = (values) => async (dispatch) => {
  dispatch(setMasterLoading());
  try {
    const response = await getData("Misc", values);
    dispatch(setMiscData(response)); // State data ko set karo
  } catch (error) {
    dispatch(setMasterError(error.message)); // Error handle karo
  }
};
export const postMiscData = (values) => async (dispatch) => {
  dispatch(setMasterLoading());
  try {
    const response = await postData("Misc/MiscInsertUpdate", values);
    dispatch(setMiscData(response)); // State data ko set karo
  } catch (error) {
    dispatch(setMasterError(error.message)); // Error handle karo
  }
};
export const fetchMiscFilterData = (values) => async (dispatch) => {
  dispatch(setMasterLoading());
  try {
    const response = await getData(`Misc?$filter=(type eq '${values}')`);
    dispatch(setMiscFilterData(response)); // State data ko set karo
  } catch (error) {
    dispatch(setMasterError(error.message)); // Error handle karo
  }
};

export const postHSNCodeData = (values) => async (dispatch) => {
  dispatch(setMasterLoading());
  try {
    const response = await postData("HSNCode", values);
    dispatch(setHSNCodeData(response)); // State data ko set karo
  } catch (error) {
    dispatch(setMasterError(error.message)); // Error handle karo
  }
};
export const fetchHSNCodeData = (values) => async (dispatch) => {
  dispatch(setMasterLoading());
  try {
    const response = await getData(
      "HSNCode",
      values
    );
    dispatch(setGetHSNCodeData(response)); // State data ko set karo
  } catch (error) {
    dispatch(setMasterError(error.message)); // Error handle karo
  }
};

export const putHSNCode = (values) => async (dispatch) => {
  dispatch(setMasterLoading());
  try {
    const response = await putData(
      "HSNCode",
      values
    );
    dispatch(setPutHSNCodeData(response)); // State data ko set karo
  } catch (error) {
    dispatch(setMasterError(error.message)); // Error handle karo
  }
};
