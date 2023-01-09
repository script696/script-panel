import React, { useEffect } from "react";
import { AppRouter } from "./components";
import { useDispatch } from "react-redux";
import { getUser } from "./store/user/actions";
import { setFirstLoad } from "./store/auth/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(checkAuth());
    dispatch(getUser());
    dispatch(setFirstLoad());
  }, []);

  return <AppRouter />;
}

export default App;
