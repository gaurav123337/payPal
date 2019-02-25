import _ from "lodash";
import {
  FETCH_NOTES,
  CREATE_NOTES,
  EDIT_NOTES
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_NOTES:
      const listOfNotes = {
        ...state,
        ..._.mapKeys(action.payload, "id")
      };
      let notes = Object.keys(listOfNotes).map((k) => listOfNotes[k]);
      return notes;

    case CREATE_NOTES:
      const newNotes = {
        ...state,
        [action.payload.id]: action.payload
      };
      let newNote = Object.keys(newNotes).map((k) => newNotes[k])
      return newNote;

    case EDIT_NOTES:
      const editPayLoad = {
        [action.payload.id]: action.payload,
        ...state
      };
      let editPayLoadList = Object.keys(editPayLoad).map((k) => editPayLoad[k]);
      return editPayLoadList;
    default:
      return [];
  }
};
