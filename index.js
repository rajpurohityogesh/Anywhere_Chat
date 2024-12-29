const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const http = require("http").createServer(app);
const socketIo = require("socket.io");
require("dotenv").config();
const MongoDB = 
  "mongodb+srv://"+process.env.ATLAS_USER+":"+process.env.ATLAS_PASSWORD+"@"+process.env.ATLAS_CLUSTER+"/chat-database?retryWrites=true&w=majority";
const mongoose = require("mongoose");
const { addUser, getUser, removeUser } = require("./helper");
const io = socketIo(http);
const PORT = process.env.PORT || 5000;
const Room = require("./models/Room");
const Message = require("./models/Message");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(authRoutes);

mongoose
  .connect(MongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

app.get("/set-cookies", (req, res) => {
  try {
    res.cookie("username", "Tony");
    res.cookie("isAuthenticated", true, { secure: true });
    res.send("Cookies are set");
  } catch (e) {
    console.log(e);
  }
});

app.get("/get-cookies", (req, res) => {
  const cookies = req.cookies;
  console.log(cookies);
  res.json(cookies);
});

io.on("connection", (socket) => {
  console.log(socket.id);
  Room.find().then((result) => {
    socket.emit("output-rooms", result);
  });
  socket.on("create-room", (name) => {
    const room = new Room({ name });
    room.save().then((result) => {
      io.emit("room-created", result);
    });
  });
  socket.on("join", ({ name, room_id, user_id }) => {
    const { error, user } = addUser({
      socket_id: socket.id,
      name,
      room_id,
      user_id,
    });
    socket.join(room_id);
    if (error) {
      console.log("Join Error : ", error);
    } else {
      console.log("New user Joined", user);
    }
    Message.find({ room_id: room_id }).then((result) => {
      socket.emit("stored-messages", result);
    });
    socket.on("sendMessage", (message, room_id, callback) => {
      const user = getUser(socket.id);
      const msgToStore = {
        name: user.name,
        user_id: user.user_id,
        room_id,
        text: message,
      };
      const msg = new Message(msgToStore);
      msg.save().then((result) => {
        io.to(room_id).emit("message", msgToStore);
        callback();
      });
    });
    socket.on("disconnect", () => {
      const user = removeUser(socket.id);
    });
  });
});

http.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
