"use client";

import React from "react";
import Frame from "./Frame.jsx";
import { useMainContext } from "../contexts/MainContext.js";
import axios from "axios";

const PromptInput = () => {
  const { state, dispatch } = useMainContext();
  const regenerate = () => {
    console.log("regenerate");
  }

  const send = async () => {
    const response = await axios.post("/api/chat-completion", {
      transcript: JSON.stringify(state.transcript),
      question: state.currentQuestion,
    })
    const { data } = response;
    const { chatCompletion } = data;
    const { choices } = chatCompletion;
    const { message } = choices[0];

    dispatch({ type: "add_qna", payload: { question: state.currentQuestion, answer: message.content } });
    dispatch({ type: "set_current_question", payload: "" });
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
            value={state.currentQuestion}
            onChange={(e) =>
              dispatch({ type: "set_current_question", payload: e.target.value })
            }
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
