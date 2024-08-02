import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../constant/colors";
import ButtonOutline from "../ui/ButtonOutline";
import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
} from "expo-location";
const LocationPicker = () => {
  const [locationPermissionInfo, requestPermission] =
    useForegroundPermissions();
  const [pickedLocation, setPickedLocation] = useState(false);

  const verifyPermission = async () => {
    if (locationPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (locationPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permission",
        "You need to grant location permission to use the app."
      );
      return false;
    }
    return true;
  };

  let mapPreview = <Text>No location taken yet.</Text>;

  if (pickedLocation) {
    mapPreview = (
      //   <Image style={styles.image} source={{ uri: pickedLocation }} />
      <View style={styles.textContainer}>
        <View>
          <Text style={{ fontWeight: "bold", marginBottom: 8 }}>
            Location দেখার ট্যাহা নাই.....
          </Text>
          <Text style={{ textAlign: "center" }}>
            Longitude : {pickedLocation.longitude}
          </Text>
          <Text style={{ textAlign: "center" }}>
            Latitude : {pickedLocation.latitude}
          </Text>
        </View>
        <Ionicons
          style={{ marginTop: 5 }}
          name="sad-outline"
          size={60}
          color="black"
        />
      </View>
    );
  }

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();

    setPickedLocation({
      latitude: location?.coords?.latitude,
      longitude: location?.coords?.longitude,
    });
  };
  const picLocationOnMapHandler = () => {};
  return (
    <View>
      <View style={styles.mapPreview}>{mapPreview}</View>
      <View style={styles.actions}>
        <ButtonOutline onPress={getLocationHandler} icon="location">
          Locate user
        </ButtonOutline>
        <ButtonOutline onPress={picLocationOnMapHandler} icon="map">
          Pick on Map
        </ButtonOutline>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});
