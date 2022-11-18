import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut, signIn } from "../store";

let SignIn = (props) => {
  let dispatch = useDispatch();

  let user = useSelector((state) => state.user.user);

  let doSignIn = () => {
    dispatch(
      signIn({
        email: "carlos@gmail.com",
        jwtToken: "u3nx77c38c778c23yn7y2739847n",
      })
    );
  };

  let doLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      {user ? (
        <button onClick={doLogOut}>logOut</button>
      ) : (
        <button onClick={doSignIn}>SignIn</button>
      )}
    </div>
  );
};

export default SignIn;
