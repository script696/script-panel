import React, { useEffect } from "react";
import { AppRouter } from "./components";
import { useDispatch } from "react-redux";
import { checkAuth } from "./store/auth/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return <AppRouter />;
}

export default App;
