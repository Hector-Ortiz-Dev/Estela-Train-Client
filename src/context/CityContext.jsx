import { createContext, useContext, useState } from "react";
import { getCitiesRequest } from "../api/cities.js";

const CityContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useCities = () => {
  const context = useContext(CityContext);

  if (!context) {
    throw new Error("useCities debe estar dentro del proveedor CityProvider");
  }

  return context;
};

// eslint-disable-next-line react/prop-types
export function CityProvider({ children }) {
  const [cities, setCities] = useState([]);

  const getCities = async () => {
    try {
      const res = await getCitiesRequest();
      setCities(res.data);
      //console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CityContext.Provider
      value={{
        cities,
        getCities,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}
