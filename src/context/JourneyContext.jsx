import { createContext, useContext, useState } from "react";
import { createJourneyRequest, getJourneysRequest } from "../api/journeys.js";

const JourneyContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useJourney = () => {
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
  const [journeys] = useState([]);

  const getJourneys = async () => {
    const res = await getJourneysRequest();
    console.log(res);
  };

  const createJourney = async (journey) => {
    const res = await createJourneyRequest(journey);
    console.log(res);
  };

  return (
    <JourneyContext.Provider
      value={{
        journeys,
        createJourney,
        getJourneys,
      }}
    >
      {children}
    </JourneyContext.Provider>
  );
}
