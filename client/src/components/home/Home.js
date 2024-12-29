import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import io from "socket.io-client";
import { UserContext } from "../../UserContext";
import RoomList from "./RoomList";
import config from "../../config";
let socket;

const Home = () => {
  const ENDPT = config.BACKEND_BASE_URL;
  const { user, setUser } = useContext(UserContext);
  const [room, setRoom] = useState("");
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    socket = io(ENDPT);
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPT]);

  useEffect(() => {
    socket.on("output-rooms", (rooms) => {
      setRooms(rooms);
    });
  }, []);

  useEffect(() => {
    socket.on("room-created", (room) => setRooms([...rooms, room]));
    console.log(rooms);
  }, [rooms]);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("create-room", room);
    console.log(room);
    setRoom("");
  };

  if (!user) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <div style={{marginTop:"2em"}} className="row">
        <div className="col s12 m6">
          <div style={{borderRadius:"0.5em"}} className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">
                Welcome {user ? user.name : ""}
              </span>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      placeholder="Enter Room Name"
                      id="room"
                      type="text"
                      className="validate"
                      value={room}
                      onChange={(e) => setRoom(e.target.value)}
                    />
                    <label htmlFor="room">Room</label>
                  </div>
                </div>
                <button style={{borderRadius:"0.5em"}} className="btn"> Create Room </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col s6 m5 offset-1">
          <RoomList rooms={rooms} />
        </div>
      </div>
    </div>
  );
};

export default Home;
