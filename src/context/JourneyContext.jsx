import { createContext, useContext, useState } from "react";
import {
  createJourneyRequest,
  getJourneysRequest,
  getJourneysODDRequest,
  deleteJourneyRequest,
  getJourneyRequest,
  updateJourneyRequest,
} from "../api/journeys.js";

const JourneyContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useJourneys = () => {
  const context = useContext(JourneyContext);

  if (!context) {
    throw new Error(
      "useJourney debe estar dentro del proveedor JourneyProvider"
    );
  }

  return context;
};

// eslint-disable-next-line react/prop-types
export function JourneyProvider({ children }) {
  const [journeys, setJourneys] = useState([]);

  const getJourneys = async () => {
    try {
      const res = await getJourneysRequest();
      setJourneys(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getJourneysOriginDestinationDate = async (
    origin,
    destination,
    date
  ) => {
    try {
      const res = await getJourneysODDRequest(origin, destination, date);
      setJourneys(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const createJourney = async (journey) => {
    const res = await createJourneyRequest(journey);
    console.log(res);
  };

  const deleteJourney = async (id) => {
    try {
      const rest = await deleteJourneyRequest(id);
      if (rest.status === 204)
        setJourneys(journeys.filter((journey) => journey._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const getJourney = async (id) => {
    try {
      const res = await getJourneyRequest(id);
      setJourneys(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateJourney = async (id, journey) => {
    try {
      const res = await updateJourneyRequest(id, journey);
      console.log("Update journey: " + res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <JourneyContext.Provider
      value={{
        journeys,
        createJourney,
        getJourneys,
        getJourneysOriginDestinationDate,
        deleteJourney,
        getJourney,
        updateJourney,
      }}
    >
      {children}
    </JourneyContext.Provider>
  );
}
