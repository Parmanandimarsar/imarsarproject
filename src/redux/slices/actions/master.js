import {
  setMasterLoading,
  setMasterError,
  setMiscData,
  setMiscFilterData,
 
} from "../CreateSlices/masterSlice";
import { postData, getData } from "../../../Api/apiServices";

// Fetch State Data
export const fetchMiscData = (values) => async (dispatch) => {
  dispatch(setMasterLoading());
  try {
    const response = await getData(
      "Misc",
      values
    );
    dispatch(setMiscData(response)); // State data ko set karo
  } catch (error) {
    dispatch(setMasterError(error.message)); // Error handle karo
  }
};
export const postMiscData = (values) => async (dispatch) => {
  dispatch(setMasterLoading());
  try {
    const response = await postData(
      "Misc/MiscInsertUpdate",
      values
    );
    dispatch(setMiscData(response)); // State data ko set karo
  } catch (error) {
    dispatch(setMasterError(error.message)); // Error handle karo
  }
};
export const fetchMiscFilterData = (values) => async (dispatch) => {
  dispatch(setMasterLoading());
  try {
    const response = await getData(
      `Misc?$filter=(type eq '${values}')`,
      
    );
    dispatch(setMiscFilterData(response)); // State data ko set karo
  } catch (error) {
    dispatch(setMasterError(error.message)); // Error handle karo
  }
};