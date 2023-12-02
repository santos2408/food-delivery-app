import axios from "axios";

export default async (page = 1, limit = 20) => {
  try {
    const response = await axios.get(
      `http://localhost:3004/restaurants?_page=${page}&_limit=${limit}`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
