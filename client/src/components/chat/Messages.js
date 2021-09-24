import React from 'react'
import STB from "react-scroll-to-bottom";
import Message from "./Message";
import "./Messages.css"

const Messages = ({messages, user_id}) => {
    return (
        <STB className="messages">
            {messages.map((message,i)=>(
                <Message key={message._id} message={message} current_uid={user_id} />
            ))}
        </STB>
    )
}

export default Messages
