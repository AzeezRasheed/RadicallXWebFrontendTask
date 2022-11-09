import { configureStore } from "@reduxjs/toolkit";
import Reducer from "../redux/reducer";
const store = configureStore({
  reducer: { reducer: Reducer },
});

export default store;
