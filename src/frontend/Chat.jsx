"use client";

import React from "react";
import Frame from "./Frame.jsx";
import QnA from "./QnA.jsx";
import { useMainContext } from "../contexts/MainContext.js";

const Chat = () => {
  const { state } = useMainContext();
  console.log(state.qna);

  return (
    <Frame>
      <div className="max-h-[600px] overflow-y-auto">
        {state?.qna?.map((item, index) => {
          return <QnA key={index} item={item} />;
        })}
      </div>
    </Frame>
  );
};

export default Chat;
