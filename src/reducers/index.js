import {
  combineReducers
} from "redux";

import loginReducer from "./loginReducer";
import notesReducer from "./notesReducer";



// export default combineReducers({
//   auth: loginReducer,

//   notesList: notesReducer
// });

export default combineReducers({
  auth: loginReducer,
  notesList: notesReducer
});
