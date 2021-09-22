import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

const styles = StyleSheet.create({
  layout: {
    paddingVertical: "10%",
  },
  button: {
    backgroundColor: "powderblue",
    padding: 10,
    borderRadius: 6,
  },
});

export default function CustomButton(selectedImage, setSelectedImage) {
  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera is required");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled) {
      return;
    } else {
      setSelectedImage({ localUri: pickerResult.uri });
    }
  };

  return (
    <View style={styles.layout}>
      <TouchableOpacity
        onPress={() => openImagePickerAsync()}
        style={styles.button}
      >
        <Text style={{ color: "#000" }}>Click Me on Android</Text>
      </TouchableOpacity>
    </View>
  );
}
