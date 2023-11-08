import axios from "./axios";

export const getCitiesRequest = () => axios.get("/cities");

export const getCityRequest = (id) => axios.get("/cities/" + id);

export const createCityRequest = (city) => axios.post("/cities", city);

export const updateCityRequest = (id, city) => axios.put("/cities/" + id, city);

export const deleteCityRequest = (id) => axios.delete("/cities/" + id);