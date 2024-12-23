import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE
} from "./actionTypes";

export const addPlace = placeName => {
  return { type: ADD_PLACE, payload: placeName };
};

export const deletePlace = () => {
  return { type: DELETE_PLACE };
};

export const selectPlace = key => {
  return { type: SELECT_PLACE, payload: key };
};

export const deselectPlace = () => {
  return { type: DESELECT_PLACE };
};
