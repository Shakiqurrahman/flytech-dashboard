import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { PersistGate } from "redux-persist/integration/react";
import MainLayout from "./AllRoutes/MainLayout";
import { router } from "./AllRoutes/Routes";
import { persistor, store } from "./Redux/store";

function App() {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <RouterProvider router={router}>
          <MainLayout />
        </RouterProvider>
      </Provider>
    </PersistGate>
  );
}

export default App;
