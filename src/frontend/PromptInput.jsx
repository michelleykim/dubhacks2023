"use client";

import React from "react";
import Frame from "./Frame.jsx";

const PromptInput = () => {
  const regenerate = () => {
    console.log("regenerate");
  }

  const send = () => {
    console.log("send");
  }

  return (
    <Frame>
      <div className="flex flex-row w-full items-center">
        <div className="flex flex-row bg-[#444654] items-center justify-start w-full p-2 mr-6 rounded-md">
          <img
            src={"/assets/userIcon.svg"}
            alt="user icon"
            className="w-10 h-10 mr-2"
          />
          <input
            type="text"
            className="text-white text-sm pl-2 bg-transparent outline-none w-full"
            placeholder="Type your question here..."
          />
          <img
            src={"/assets/iconSend.svg"}
            alt="send icon"
            className="w-10 h-10 ml-auto cursor-pointer"
            onClick={send}
          />
        </div>

        <img
          src={"/assets/regenerateIcon.svg"}
          alt="regenerate icon"
          className="w-5 h-5 mr-2 ml-auto cursor-pointer"
          onClick={regenerate}
        />
      </div>
    </Frame>
  );
};

export default PromptInput;
