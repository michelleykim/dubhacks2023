"use client";

import React from "react";
import { useState, useEffect } from "react";

const Question = ({ question, isOpen }) => {
	const [rotateclass, setRotateclass] = useState("rotate-0");

	useEffect(() => {
		if (!isOpen) {
			setRotateclass("transform rotate-90");
		} else {
			setRotateclass("transform rotate-0");
		}
	}, [isOpen]);
	return (
		<div
			className={`flex flex-row bg-grey items-center justify-start w-full p-3 rounded-t-lg`}
		>
			<img
				src={"/assets/userIcon.svg"}
				alt="user icon"
				className="w-10 h-10 mr-2"
			/>
			<p className="text-white text-sm pl-2">{question}</p>
			<img
				src={"/assets/qnaArrow.svg"}
				alt="arrow icon"
				className={`w-5 h-5 ml-auto ${rotateclass}`}
			/>
		</div>
	);
};

export default Question;
