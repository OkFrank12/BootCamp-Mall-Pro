import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./router/MainRouter";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import { Store } from "./global/Store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const persistor = persistStore(Store);
  const Client = new QueryClient();
  return (
    <div>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={Client}>
            <RouterProvider router={MainRouter} />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
