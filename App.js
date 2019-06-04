import React from "react";
import { StyleSheet, View } from "react-native";
import PlaceList from "./src/components/placeList/PlaceList";
import PlaceInput from "./src/components/placeInput/PlaceInput";
import placeImage from "./assets/place.jpg";

export default class App extends React.Component {
  state = {
    places: []
  };

  placeSubmitHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: String(Math.random()),
          name: placeName,
          image: placeImage
        })
      };
    });
  };

  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key;
        })
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput
          placeNameChangeHandler={this.placeNameChangeHandler}
          placeName={this.state.placeName}
          addPlace={this.placeSubmitHandler}
        />
        <PlaceList
          places={this.state.places}
          onItemDeleted={this.placeDeletedHandler}
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
