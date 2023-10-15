"use client";

import React from "react";
import Frame from "./Frame.jsx";

const examples = [
    {
        "prompt": "What is the meaning of life?",
        "response": "42"
    },
    {
        "prompt": "What is the meaning of food?",
        "response": "to be eaten and enjoyed"
    }
]

const Chat = () => {
    const [qna, setQna] = React.useState(examples);

    return (
        <Frame>
            <h1>Chat</h1>
        </Frame>
    )
}

export default Chat;