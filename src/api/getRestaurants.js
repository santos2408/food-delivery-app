import axios from "axios";

const baseUrl = "http://localhost:3004/restaurants";
const limit = 20;

export default async (page = 1) => {
  const url = `${baseUrl}?&_page=${page}&_limit=${limit}`;

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
