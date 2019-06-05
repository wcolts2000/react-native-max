import React from "react";
import { connect } from "react-redux";
import { StyleSheet, View } from "react-native";
import PlaceList from "./src/components/placeList/PlaceList";
import PlaceInput from "./src/components/placeInput/PlaceInput";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";

import {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace
} from "./src/store/actions";

class App extends React.Component {
  placeSubmitHandler = placeName => {
    this.props.addPlace(placeName);
  };

  placeDeletedHandler = () => {
    this.props.deletePlace();
  };

  modalCloseHandler = () => {
    this.props.deselectPlace();
  };

  placeSelectedHandler = key => {
    this.props.selectPlace(key);
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClose={this.modalCloseHandler}
        />
        <PlaceInput
          placeNameChangeHandler={this.placeNameChangeHandler}
          placeName={this.props.placeName}
          addPlace={this.placeSubmitHandler}
        />
        <PlaceList
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 45,
    backgroundColor: "#fff"
  },
  inputStyles: {
    width: "70%"
  }
});

const mapStateToProps = ({ places: { places, selectedPlace } }) => {
  return {
    places,
    selectedPlace
  };
};

export default connect(
  mapStateToProps,
  { addPlace, deletePlace, selectPlace, deselectPlace }
)(App);
