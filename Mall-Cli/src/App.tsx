import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./router/MainRouter";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import { Store } from "./global/Store";
import { Provider } from "react-redux";

const App = () => {
  const persistor = persistStore(Store);
  return (
    <div>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={MainRouter} />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
