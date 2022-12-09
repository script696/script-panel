import React from "react";
import "./styles/index.css";
import { Admin } from "./pages";
import SettingsProvider from "./context/SettingsProvider";

function App() {
  return (
    <div className="App">
      <SettingsProvider>
        <Admin />
      </SettingsProvider>
    </div>
  );
}

export default App;
