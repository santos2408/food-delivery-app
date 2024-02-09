import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_API_URL;

export default async (page = 1, limit = 20, category) => {
  let url = "";

  if (category) {
    url = `${baseUrl}/restaurants?category=${category}&page=${page}&limit=${limit}`;
  } else {
    url = `${baseUrl}/restaurants?page=${page}&limit=${limit}`;
  }

  try {
    const response = await axios.get(url);

    const isRequestOk = response.request.status === 200 && response.request.readyState === 4;

    if (!isRequestOk) {
      throw new Error("Não foi possível buscar os restaurantes.");
    }

    const restaurants = response.data;
    let updatedRestaurants = {};

    if (restaurants.length === 20) {
      updatedRestaurants = { data: [...restaurants], hasNext: true };
    } else {
      updatedRestaurants = { data: [...restaurants], hasNext: false };
    }

    return updatedRestaurants;
  } catch (error) {
    console.log(error);
  }
};
