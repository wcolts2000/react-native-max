import React, { Component } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  placeNameChangeHandler = val => {
    this.setState({ placeName: val });
  };

  onPlaceAdd = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.props.addPlace(this.state.placeName);
    this.setState({ placeName: "" });
  };

  render() {
    return (
      <View style={styles.rowContainer}>
        <TextInput
          onChangeText={this.placeNameChangeHandler}
          value={this.state.placeName}
          placeholder="An awesome place here..."
          style={styles.inputStyles}
        />
        <Button
          title="Add"
          onPress={this.onPlaceAdd}
          style={styles.buttonStyles}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  buttonStyles: {
    width: "30%"
  }
});

export default PlaceInput;
