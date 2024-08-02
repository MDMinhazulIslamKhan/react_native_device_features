import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../constant/colors";

const PlaceForm = () => {
  const [enteredText, setEnteredText] = useState("");
  const changeTextHandler = (text) => {
    setEnteredText(text);
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
