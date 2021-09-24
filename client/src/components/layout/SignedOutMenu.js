import React from "react";

const SignedOutMenu = () => {
  return (
    <>
      <li>
        <a href="/login">LogIN</a>
      </li>
      <li>
        <a href="/signup">SignUp</a>
      </li>
    </>
  );
};

export default SignedOutMenu;
