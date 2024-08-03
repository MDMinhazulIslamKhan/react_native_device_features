import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../constant/colors";

const PlaceItem = ({ place, onSelect }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}
      onPress={onSelect}
    >
      <Image
        style={styles.image}
        source={{
          uri:
            place.imageUri ||
            "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Freact_native_device_features-71405b16-fda1-4b73-b66d-8adfb0a8231b/ImagePicker/f2b7be11-3bca-4ed2-bcad-f4aac0738f61.jpeg",
        }}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
        <Text style={styles.location}>Latitude: {place.location.latitude}</Text>
        <Text style={styles.location}>
          Longitude: {place.location.longitude}
        </Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 6,
    marginVertical: 12,
    backgroundColor: Colors.primary500,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 4,
  },
  pressed: {
    opacity: 0.9,
  },
  image: {
    flex: 1,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    height: 100,
    justifyContent: "center",
  },
  info: {
    flex: 2,
    padding: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: Colors.gray700,
  },
  address: {
    fontSize: 18,
    color: Colors.gray700,
  },
  location: {
    fontSize: 8,
    color: Colors.gray700,
  },
});
