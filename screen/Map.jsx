import { Alert, StyleSheet } from "react-native";
import IconButton from "../components/ui/IconButton";
import React, { useCallback, useLayoutEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";

const Map = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const region = {
    latitude: 23.7130245,
    longitude: 90.3955051,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const selectedLocationHandler = (event) => {
    const latitude = event?.nativeEvent?.coordinate?.latitude;
    const longitude = event?.nativeEvent?.coordinate?.longitude;
    if (latitude && latitude) {
      setSelectedLocation({
        latitude: latitude,
        longitude: longitude,
      });
    }
  };

  // useCallback hooks for prevent unnecessary re-renders
  const saveLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        "No location picked",
        "You have to pick a location ( by tap on map ) first !!!"
      );
      return;
    }
    navigation.navigate("AddPlaces", { pickedLocation: selectedLocation });
  }, [selectedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          size={24}
          color={tintColor}
          onPress={saveLocationHandler}
        />
      ),
    });
  }, [navigation, saveLocationHandler]);

  return (
    <MapView
      initialRegion={region}
      onPress={selectedLocationHandler}
      style={styles.container}
    >
      {selectedLocation && (
        <Marker title="Picked Location" coordinate={selectedLocation} />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
