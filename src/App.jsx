import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import MainLayout from "./AllRoutes/MainLayout";
import { router } from "./AllRoutes/Routes";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}>
        <MainLayout />
      </RouterProvider>
    </Provider>
  );
}

export default App;
