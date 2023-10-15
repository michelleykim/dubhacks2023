"use client";

import React from "react";
import Frame from "./Frame.jsx";
import QnA from "./QnA.jsx";
import { useMainContext } from "../contexts/MainContext.js";


const Chat = () => {
  const { state } = useMainContext();

  return (
    <Frame>
      {state?.qna.map((item, index) => {
        return <QnA key={index} item={item} />;
      })}
    </Frame>
  );
};

export default Chat;
