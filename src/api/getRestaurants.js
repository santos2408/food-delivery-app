import axios from "axios";

const baseUrl = "https://food-delivery-app-two-delta.vercel.app/#/restaurants";
const limitPerPage = 20;

export default async (page = 1, category) => {
  let url = "";

  if (category) {
    url = `${baseUrl}?category=${category}&_page=${page}&_limit=${limitPerPage}`;
  } else {
    url = `${baseUrl}`;
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
