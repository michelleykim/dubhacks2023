"use client";

import React from "react";

const Answer = ({ answer }) => {
  return (
    <div className="flex flex-row bg-[#444654] items-start justify-start w-full p-3 rounded-b-md">
      <img src={'/assets/aiIcon.svg'} alt="user icon" className="w-10 h-10 mr-2" />
      <p className="text-white text-sm pl-2">{answer}</p>
    </div>
  )
};

export default Answer;
