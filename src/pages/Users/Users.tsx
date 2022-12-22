import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { testAction } from "../../store/auth/actions";

const Users = () => {
  console.log("here in users");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(testAction());
  }, []);
  return <div style={{ color: "red" }}>Users</div>;
};

export default Users;
