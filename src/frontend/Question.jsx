"use client";

import React from "react";

const Question = ({ question, isOpen }) => {
  return (
    <div className={`flex flex-row bg-grey items-center justify-start w-full p-3 ${isOpen ? 'rounded-t-md' : 'rounded-md'}`}>
      <img src={'/assets/userIcon.svg'} alt="user icon" className="w-10 h-10 mr-2" />
      <p className="text-white text-sm pl-2">{question}</p>
      <img src={'/assets/qnaArrow.svg'} alt="arrow icon" className={`w-5 h-5 ml-auto rotate-90 ${isOpen ? 'transform rotate-0' : ''}`} />
    </div>
  )
};

export default Question;
