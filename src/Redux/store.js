import { configureStore } from "@reduxjs/toolkit";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { apiSlice } from "./api/apiSlice";
import { aboutApiSlice } from "./features/about/aboutApi";
import authReducer from "./features/auth/authSlice";
import { reviewApiSlice } from "./features/reviews/reviewApi";
import { teamApiSlice } from "./features/team/teamApi";
import { testimonialApiSlice } from "./features/testimonials/testimonialApi";

const createPersistConfig = (key) => ({
    key,
    storage,
});

const persistedAuthReducer = persistReducer(
    createPersistConfig("auth"),
    authReducer
);

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [teamApiSlice.reducerPath]: teamApiSlice.reducer,
        [aboutApiSlice.reducerPath]: aboutApiSlice.reducer,
        [testimonialApiSlice.reducerPath]: testimonialApiSlice.reducer,
        [reviewApiSlice.reducerPath]: reviewApiSlice.reducer,

        auth: persistedAuthReducer,
    },

    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(
            apiSlice.middleware,
            teamApiSlice.middleware,
            aboutApiSlice.middleware,
            testimonialApiSlice.middleware,
            reviewApiSlice.middleware
        ),
    devTools: true,
});

export const persistor = persistStore(store);
