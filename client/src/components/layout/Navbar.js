import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";
import config from "../../config";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  const logout = async () => {
    try {
      const res = await fetch(`${config.BACKEND_BASE_URL}/logout`, {
        credentials: "include",
      });
      const data = res.json();
      console.log("Logout Data", data);
      setUser(null);
    } catch (e) {
      console.log(e);
    }
  };
  const menu = user ? <SignedInMenu logout={logout} /> : <SignedOutMenu />;
  return (
    <>
      <nav className="green">
        <div className="nav-wrapper">
          <a style={{width:"fit-content",margin:"0 auto"}} href="/" className="brand-logo">
            Chat
          </a>
          <a href="/#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {menu}
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        {menu}
      </ul>
    </>
  );
};

export default Navbar;
