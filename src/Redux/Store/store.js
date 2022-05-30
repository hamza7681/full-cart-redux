import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../Reducers/CartReducer";
import AuthReducer from "../Reducers/AuthReducer";

const store = configureStore({
  reducer: {
    CartReducer,
    AuthReducer,
  },
});

export default store;
