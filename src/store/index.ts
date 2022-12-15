import { configureStore } from "@reduxjs/toolkit";

import carReducer from "./slices/car";

const store = configureStore({
  reducer: {
    car: carReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
