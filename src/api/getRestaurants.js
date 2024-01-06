import axios from "axios";

const baseUrl = "http://localhost:3004/restaurants";

export default async (page = 1, limit = 20) => {
  const url = `${baseUrl}?&_page=${page}&_limit=${limit}`;

  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
