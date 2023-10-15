"use client";

import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const Answer = ({ answer }) => {
	const [darkmode, setDarkmode] = useState(true);
	const searchParams = useSearchParams();

	useEffect(() => {
		if (searchParams.has("darkmode")) {
			if (searchParams.get("darkmode") === "true") {
				setDarkmode(true);
			} else {
				setDarkmode(false);
			}
		}
	}, [searchParams]);

	return (
		<div className="flex flex-row bg-[#ECECF1] dark:bg-[#444654] items-start justify-start w-full p-3 rounded-b-md">
			<img
				src={"/assets/aiIcon.svg"}
				alt="user icon"
				className="w-10 h-10 mr-2"
			/>
			{darkmode ? (
				<p className="text-white text-sm pl-2">{answer}</p>
			) : (
				<p className="text-black text-sm pl-2">{answer}</p>
			)}
		</div>
	);
};

export default Answer;
