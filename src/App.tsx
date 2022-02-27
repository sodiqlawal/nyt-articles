import AppRoute from "routes/routes";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store, { persistor } from "store";
import "styles/globals.scss";
import { SearchContext } from "context";
import { useState } from "react";
import { useDebounce } from "use-debounce";

function App() {
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch] = useDebounce(search, 500);
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer />
        <SearchContext.Provider value={{ search, setSearch, debouncedSearch }}>
          <AppRoute />
        </SearchContext.Provider>
      </PersistGate>
    </Provider>
  );
}

export default App;
