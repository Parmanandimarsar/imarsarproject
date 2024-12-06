import {
  setLoading,
  setError,
  setMiscData,
 
} from "../CreateSlices/masterSlice";
import { postData, getData } from "../../../Api/apiServices";

// Fetch State Data
export const fetchMiscData = (values) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await getData(
      "Misc",
      values
    );
    dispatch(setMiscData(response)); // State data ko set karo
  } catch (error) {
    dispatch(setError(error.message)); // Error handle karo
  }
};
export const postMiscData = (values) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await postData(
      "Misc/MiscInsertUpdate",
      values
    );
    dispatch(setMiscData(response)); // State data ko set karo
  } catch (error) {
    dispatch(setError(error.message)); // Error handle karo
  }
};
