import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import { Colors } from "../../constant/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../ui/Button";
import { Place } from "../../models/place";

const PlaceForm = ({ onCreatePlace }) => {
  const [enteredText, setEnteredText] = useState("");
  const [pickedLocation, setPickedLocation] = useState();
  const [selectImage, setSelectImage] = useState();

  const changeTextHandler = (text) => {
    setEnteredText(text);
  };
  const takeImageHandler = (uri) => {
    setSelectImage(uri);
  };

  const pickLocationHandler = useCallback((location) => {
    setPickedLocation(location);
  }, []);

  const savePlaceHandler = () => {
    // if (!enteredText || !selectImage || !pickedLocation) {
    if (!enteredText || !pickedLocation) {
      Alert.alert("Invalid Input", "Please fill the form...");
      return;
    }
    const placeData = new Place(enteredText, selectImage, pickedLocation);
    onCreatePlace(placeData);
  };
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTextHandler}
          value={enteredText}
        />
      </View>
      <ImagePicker onTakeImage={takeImageHandler} />
      <LocationPicker onPickLocation={pickLocationHandler} />
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBlockColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
