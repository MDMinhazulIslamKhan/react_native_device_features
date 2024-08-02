import { StyleSheet, View } from "react-native";
import React from "react";
import PlaceForm from "../components/Places/PlaceForm";

const AddPlaces = () => {
  return (
    <View style={styles.container}>
      <PlaceForm />
    </View>
  );
};

export default AddPlaces;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
