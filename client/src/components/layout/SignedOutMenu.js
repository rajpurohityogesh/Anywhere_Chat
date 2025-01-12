import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const SignedOutMenu = () => {
  return (
    <>
      <li>
        <Link to={"/login"}>
          LogIN
        </Link>
      </li>
      <li>
        <Link to={"/signup"}>
          SignUp
        </Link>
      </li>
    </>
  );
};

export default SignedOutMenu;
