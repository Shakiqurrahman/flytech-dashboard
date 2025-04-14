import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";

const store = configureStore({
    reducer: {},
});

export default store;
export const persistor = persistStore(store);
