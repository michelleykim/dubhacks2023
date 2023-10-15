"use client";

import React from "react";
import { useState, useEffect } from "react";
import Frame from "./Frame.jsx";
import QnA from "./QnA.jsx";
import { useMainContext } from "../contexts/MainContext.js";

const Chat = () => {
	const { state } = useMainContext();
	const [hasQna, setHasQna] = useState(false);

	useEffect(() => {
		console.log(state.qna);
		if (state.qna.length != 0 && state?.qna) {
			setHasQna(true);
		}
	}, [state.qna]);

	return (
		<Frame>
			<div className="max-h-[70vh] min-h-[70vh] overflow-y-auto">
				{hasQna ? (
					state?.qna?.map((item, index) => {
						return <QnA key={index} item={item} />;
					})
				) : (
					<div className="w-full h-full flex flex-col items-center justify-center py-16">
						<img
							src="/assets/logo.svg"
							alt="logo icon"
							className="w-16 h-16 mr-1 mt-1 mb-10"
						></img>
						<div className="w-11/12 flex flex-col bg-gradient-to-r from-teal-300 to-emerald-600 mx-24 my-30 items-center rounded-xl py-10">
							<div className="flex flex-row">
								<img
									src="/assets/locationIcon.svg"
									alt="location icon"
									className="w-5 h-5 mr-1 mt-1"
								></img>
								<span>ask a question</span>
							</div>
							<div className="flex flex-row mt-1">
								<img
									src="/assets/lighteningIcon.svg"
									alt="lightening icon"
									className="w-5 h-5 mr-1 mt-1"
								></img>
								<span>test your understanding</span>
							</div>
							<div className="flex flex-row mt-1">
								<img
									src="/assets/bookIcon.svg"
									alt="book icon"
									className="w-5 h-5 mr-1 mt-1"
								></img>
								<span>reflect on key concepts</span>
							</div>
							<div className="flex flex-row mt-1">
								<img
									src="/assets/bulbIcon.svg"
									alt="lightbulb icon"
									className="w-5 h-5 mr-1 mt-1"
								></img>
								<span>apply your understanding</span>
							</div>
						</div>
					</div>
				)}
			</div>
		</Frame>
	);
};

export default Chat;
