import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import Chat from "./components/chat/Chat";
import Home from "./components/home/Home";
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import config from "./config";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await fetch(`${config.BACKEND_BASE_URL}/verifyUser`, {
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        console.log(data);
        setUser(data);
      } catch (e) {
        console.log(e);
      }
    };
    verifyUser();
  }, []);

  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={{ user, setUser }}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/chat/:room_id/:room_name" component={Chat} />
          </Switch>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
