import React from "react";
import { ScrollView, FlatList } from "react-native";
import ListItem from "../listItem/ListItem";

const PlaceList = props => {
  return (
    <FlatList
      data={props.places}
      renderItem={info => (
        <ListItem
          placeName={info.item.name}
          placeImage={info.item.image}
          onItemPressed={() => props.onItemDeleted(info.item.key)}
        />
      )}
    />
  );
};

export default PlaceList;

// const placesOutput = props.places.map((place, i) => (
//   <ListItem
//     key={i}
//     placeName={place}
//     onItemPressed={() => props.onItemDeleted(i)}
//   />
// ));

// return <ScrollView>{placesOutput}</ScrollView>;
