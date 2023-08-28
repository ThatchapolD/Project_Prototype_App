import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Dimensions,
} from "react-native";

import Carousel from "react-native-snap-carousel";

//Importing Style Color
import { GlobalColor } from "../style/Color";

const ImageCarousel = ({ images }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [enlargedImageDimensions, setEnlargedImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const screenDimensions = Dimensions.get("screen");
    const maxWidth = screenDimensions.width - 40; // Adjust as needed
    const maxHeight = screenDimensions.height - 100; // Adjust as needed

    if (selectedImage) {
      const imageDimensions = Image.resolveAssetSource(selectedImage);
      const imageAspectRatio = imageDimensions.width / imageDimensions.height;

      let scaledWidth = maxWidth;
      let scaledHeight = maxWidth / imageAspectRatio;

      if (scaledHeight > maxHeight) {
        scaledHeight = maxHeight;
        scaledWidth = maxHeight * imageAspectRatio;
      }

      setEnlargedImageDimensions({ width: scaledWidth, height: scaledHeight });
    }
  }, [selectedImage]);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => openModal(item)}>
        <View style={styles.carouselItem}>
          <Image source={item} style={styles.image} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={images}
        renderItem={renderItem}
        sliderWidth={350}
        itemWidth={250}
      />
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          {selectedImage && (
            <Image
              source={selectedImage}
              style={[
                styles.enlargedImage,
                {
                  width: enlargedImageDimensions.width,
                  height: enlargedImageDimensions.height,
                },
              ]}
              resizeMode="contain"
            />
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 25,
  },
  carouselItem: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    width: 250,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalColor.colors.primary10,
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    padding: 10,
    marginTop: 30,
    marginRight: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
  },
  enlargedImage: {
    borderRadius: 10,
  },
});

export default ImageCarousel;
