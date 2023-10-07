import axios from "axios";

const apiUrl: string = `http://localhost:5000`;

export const ownerRegisterAPI = async (data: any) => {
  try {
    return await axios.post(`${apiUrl}/api/register`, data).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const ownerLoginAPI = async (data: any) => {
  try {
    return await axios.post(`${apiUrl}/api/login`, data).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const verifyOwnerAPI = async (token: any) => {
  try {
    return await axios.get(`${apiUrl}/api/${token}/verify-account`);
  } catch (error) {
    console.log(error);
  }
};

export const getOneOwner = async (id: string) => {
  try {
    return await axios.get(`${apiUrl}/api/${id}/one`).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
