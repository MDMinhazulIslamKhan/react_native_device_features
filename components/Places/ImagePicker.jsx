import { Alert, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  launchCameraAsync,
  PermissionStatus,
  useCameraPermissions,
} from "expo-image-picker";
import { Colors } from "../../constant/colors";
import ButtonOutline from "../ui/ButtonOutline";

const ImagePicker = ({ onTakeImage }) => {
  const [cameraPermissionInfo, requestPermission] = useCameraPermissions();
  const [pickedImage, setPickedImage] = useState();

  const verifyPermission = async () => {
    if (cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (cameraPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permission",
        "You need to grant camera permission to use the app."
      );
      return false;
    }
    return true;
  };

  const takeCameraHandler = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setPickedImage(image.assets[0].uri);
    onTakeImage(image.assets[0].uri);
  };

  let imagePreview = <Text>No image taken yet.</Text>;

  if (pickedImage) {
    imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
  }
  /*
  
    if (!pickedImage) {
    imagePreview = (
      <Image
        style={styles.image}
        source={{
          uri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Freact_native_device_features-71405b16-fda1-4b73-b66d-8adfb0a8231b/ImagePicker/f2b7be11-3bca-4ed2-bcad-f4aac0738f61.jpeg",
        }}
      />
    );
  }
  
  */
  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <ButtonOutline onPress={takeCameraHandler} icon="camera">
        Take Image
      </ButtonOutline>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
