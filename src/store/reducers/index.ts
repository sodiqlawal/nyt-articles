import { combineReducers } from "redux";
import articleReducer from "./articles";

const rootReducer = combineReducers({
  articleReducer: articleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
