import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { testAction } from "../../store/auth/actions";

const Home = () => {
  console.log("here in home");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(testAction());
  }, []);
  return <div style={{ color: "red" }}>Home</div>;
};

export default Home;
