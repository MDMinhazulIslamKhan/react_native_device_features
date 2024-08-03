import React, { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { useIsFocused } from "@react-navigation/native";

const AllPlaces = ({ route }) => {
  const isFocused = useIsFocused();
  const [loadedPlace, setLoadedPlace] = useState([]);

  useEffect(() => {
    if (isFocused && route.params) {
      const isExist = loadedPlace.find(
        (place) => place.id === route.params?.place?.id
      );
      if (!isExist)
        setLoadedPlace((currentPlace) => [
          ...currentPlace,
          route.params?.place,
        ]);
    }
  }, [isFocused, route]);

  return <PlacesList places={loadedPlace} />;
};

export default AllPlaces;
