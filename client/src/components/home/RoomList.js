import React from 'react';
import { Link } from 'react-router-dom';
import Room from "./Room";

const RoomList = (props) => {
    return (
        <div>
            {props.rooms && props.rooms.map(room=>(
                <Link to={"/chat/"+room._id+"/"+room.name} key = {room._id}>
                    <Room  name = {room.name} />
                </Link>
            ))}
        </div>
    )
}

export default RoomList;