import React from "react";
import "./styles/index.css";
import SettingsProvider from "./context/SettingsProvider";
import { AppRouter } from "./components";

function App() {
  console.log(process.env.BASE_URL);
  return (
    <div className="App">
      <SettingsProvider>
        <AppRouter />
      </SettingsProvider>
    </div>
  );
}

export default App;
