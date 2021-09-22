import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";
import uploadToAnonymousFilesAsync from "anonymous-files";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: "rgb(247,247,247)",
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)",
    color: Platform.OS === "ios" ? "cyan" : "tomato",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  parentBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  layout: {
    paddingVertical: "10%",
  },
  button: {
    backgroundColor: "powderblue",
    padding: 10,
    borderRadius: 8,
  },
});

const SectionListBasics = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
      if (Platform.OS === "web") {
        const remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);
        setSelectedImage({ localUri: pickerResult.uri, remoteUri });
      } else {
        setSelectedImage({ localUri: pickerResult.uri });
      }
    }
  };

  const openShareDialog = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`The image is available at: ${selectedImage.remoteUri}`);
    }

    await Sharing.shareAsync(selectedImage.localUri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.parentBox}>
        <TouchableOpacity onPress={() => openImagePickerAsync()}>
          <Image
            source={{
              uri:
                selectedImage !== null
                  ? selectedImage.localUri
                  : "https://picsum.photos/300/300",
            }}
            style={{
              height: 300,
              width: 300,
              borderRadius: 10,
              resizeMode: "contain",
            }}
          />
        </TouchableOpacity>
        <View style={styles.layout}>
          {selectedImage ? (
            <TouchableOpacity
              onPress={() => openShareDialog()}
              style={styles.button}
            >
              <Text style={{ color: "#000" }}>Compartir Imágen</Text>
            </TouchableOpacity>
          ) : (
            <View />
          )}
        </View>
      </View>
    </View>
  );
};

export default SectionListBasics;
