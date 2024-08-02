import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PlaceForm from "../components/Places/PlaceForm";

const AddPlaces = () => {
  return (
    <View style={styles.container}>
      <Text>AddPlaces</Text>
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
