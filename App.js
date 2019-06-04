import React from "react";
import { StyleSheet, View } from "react-native";
import PlaceList from "./src/components/placeList/PlaceList";
import PlaceInput from "./src/components/placeInput/PlaceInput";
import PlaceImage from "./assets/place.jpg";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";

export default class App extends React.Component {
  state = {
    places: [],
    selectedPlace: null
  };

  placeSubmitHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: String(Math.random()),
          name: placeName,
          image: PlaceImage
        })
      };
    });
  };

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  };

  modalCloseHandler = () => {
    this.setState({ selectedPlace: null });
  };

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClose={this.modalCloseHandler}
        />
        <PlaceInput
          placeNameChangeHandler={this.placeNameChangeHandler}
          placeName={this.state.placeName}
          addPlace={this.placeSubmitHandler}
        />
        <PlaceList
          places={this.state.places}
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
