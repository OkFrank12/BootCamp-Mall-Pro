import axios from "axios";

const apiUrl: string = `http://localhost:5000`;

export const viewProducts = async () => {
  try {
    return await axios.get(`${apiUrl}/api/store/view-products`).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const payForProduct = async (data: any) => {
  try {
    return await axios
      .post(`${apiUrl}/api/make-payment`, { amount: data })
      .then((res) => {
        return res.data.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};
