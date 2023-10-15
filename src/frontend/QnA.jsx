"use client";

import React from "react";
import Question from "./Question";
import Answer from "./Answer";

const QnA = ({ item }) => {
  return (
    <div className="p-5">
      <Question question={item?.question} />
      <Answer answer={item?.answer} />
    </div>
  );
};

export default QnA;
