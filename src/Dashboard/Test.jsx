import { LockClosedIcon } from "@heroicons/react/solid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./../features/login/loginSlice";

const Test = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  console.log(user);
  return (
    <div className="App">
      <button
        className="btn"
        onClick={() => {
          dispatch(login());
          navigate("admin");
        }}
      >
        login
      </button>
    </div>
  );
};

export default Test;
