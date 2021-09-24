import React from "react";

const SignedInMenu = ({ logout }) => {
  return (
    <li>
      <a onClick={logout} href="/#">
        LogOut
      </a>
    </li>
  );
};

export default SignedInMenu;
