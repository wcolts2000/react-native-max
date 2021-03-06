import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  Button,
  Modal,
  StyleSheet
} from "react-native";
// import Icon from "react-native-vector-icons/Ionicons";

const PlaceDetail = props => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image
          style={styles.imageStyles}
          source={props.selectedPlace ? props.selectedPlace.image : null}
        />
        <Text style={styles.placeName}>
          {props.selectedPlace && props.selectedPlace.name}
        </Text>
      </View>
    );
  }
  return (
    <Modal
      onRequestClose={props.onModalClose}
      visible={props.selectedPlace !== null}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <TouchableOpacity>
            {/* <Icon size={30} name="alert" color="red" /> */}
          </TouchableOpacity>
          <Button onPress={props.onItemDeleted} title="Delete" color="red" />
          <Button onPress={props.onModalClose} title="Close" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  imageStyles: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  }
});

export default PlaceDetail;
