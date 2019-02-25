import notes from "../api/notes";
import history from "../history";
import {
  SIGN_IN,

  CREATE_NOTES,
  FETCH_NOTES,
  EDIT_NOTES
} from "./types";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};



export const createNotes = formValues => async (dispatch, getState) => {

  const response = await notes.post("/notes", {
    ...formValues

  });

  dispatch({
    type: CREATE_NOTES,
    payload: response.data
  });
  history.push("/notes");
};

export const fetchNotes = () => async dispatch => {
  const response = await notes.get("/notes");

  dispatch({
    type: FETCH_NOTES,
    payload: response.data
  });
};



export const editNotes = (id, formValues) => async dispatch => {
  const response = await notes.patch(`/notes/${id}`, formValues);

  dispatch({
    type: EDIT_NOTES,
    payload: response.data
  });
  history.push("/notes");
};
