

import axiosInstance from "./axiosInstance";

// GET API call
console.log("axiosInstance",axiosInstance)
export const getData = async (endpoint, data) => {
  try {
    const response = await axiosInstance.get(`/api/${endpoint}`, data);
    return response.data;
  } catch (error) {
    throw error; // Caller ko error pass karo
  }
};

// POST API call
export const postData = async (endpoint, data) => {
  try {
    const response = await axiosInstance.post(`/api/${endpoint}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const putData = async (endpoint, data) => {
  try {
    const response = await axiosInstance.put(`/api/${endpoint}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
