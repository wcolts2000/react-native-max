import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE
} from "../actions/actionTypes";

import PlaceImage from "../../../assets/place.jpg";

const INITIAL_STATE = {
  places: [],
  selectedPlace: null
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: String(Date.now()),
          name: action.payload,
          image: PlaceImage
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== state.selectedPlace.key;
        }),
        selectedPlace: null
      };
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return place.key === action.payload;
        })
      };
    case DESELECT_PLACE:
      return { ...state, selectedPlace: null };
    default:
      return state;
  }
};

export default reducer;
