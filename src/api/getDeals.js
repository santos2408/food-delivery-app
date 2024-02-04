import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_API_URL;

export default async () => {
  try {
    return await axios.get(`${baseUrl}/deals`);
  } catch (error) {
    console.log(error);
  }
};
