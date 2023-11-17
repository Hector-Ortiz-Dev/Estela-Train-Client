import axios from "./axios";

export const getJourneysRequest = () => axios.get("/journeys");

export const getJourneyRequest = (id) => axios.get("/journeys/" + id);

export const getJourneysODDRequest = (origin, destination, date) => axios.get("/journeys-odd/" + origin + "/" + destination + "/" + date);

export const createJourneyRequest = (journey) => axios.post("/journeys", journey);

export const updateJourneyRequest = (id, journey) =>
  axios.put("/journeys/" + id, journey);

export const deleteJourneyRequest = (id) => axios.delete("/journeys/" + id);
