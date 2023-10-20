import axios from "./axios";

export const getJourneysRequest = () => axios.get("/journeys");

export const getJourneyRequest = (id) => axios.get("/journeys/" + id);

export const createJourneyRequest = (journey) => axios.post("/journeys", journey);

export const updateJourneyRequest = (journey) =>
  axios.put("/journeys/" + journey._id, journey);

export const deleteJourneyRequest = (id) => axios.delete("/journeys/" + id);
