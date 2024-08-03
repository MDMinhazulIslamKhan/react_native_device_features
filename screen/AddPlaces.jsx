import { StyleSheet, View } from "react-native";
import React from "react";
import PlaceForm from "../components/Places/PlaceForm";

const AddPlaces = ({ navigation }) => {
  const createPlaceHandler = (place) => {
    navigation.navigate("AllPlaces", { place });
  };
  return (
    <View style={styles.container}>
      <PlaceForm onCreatePlace={createPlaceHandler} />
    </View>
  );
};

export default AddPlaces;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
