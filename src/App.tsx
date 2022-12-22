import React, { useEffect } from "react";
import "./styles/index.css";
import SettingsProvider from "./context/SettingsProvider";
import { AppRouter } from "./components";
import { checkAuth } from "./store/auth/actions";
import { useDispatch } from "react-redux";
import { ACCESS_TOKEN } from "./api/constants/app_constants";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
      dispatch(checkAuth());
    }
  }, []);

  return (
    <div className="App">
      <SettingsProvider>
        <AppRouter />
      </SettingsProvider>
    </div>
  );
}

export default App;
