"use client";

import React, { useEffect } from "react";
import { useState } from "react";

const Accordion = ({ heading, children }) => {
	const [open, setOpen] = useState(false);
	const [rotateclass, setRotateclass] = useState("w-5 h-5 ml-auto rotate-0");

	useEffect(() => {
		if (!open) {
			setRotateclass("w-5 h-5 ml-auto transform rotate-90");
		} else {
			setRotateclass("w-5 h-5 ml-auto transform rotate-0");
		}
	}, [open]);

	return (
		<div
			className="w-full"
			onClick={() => {
				setOpen(!open);
			}}
		>
			<h1
				className={
					"w-full flex dark:bg-zinc-800 p-5 rounded-tl-xl rounded-tr-xl font-semibold text-lg"
				}
			>
				{heading}
				<img
					src={"/assets/qnaArrow.svg"}
					alt="arrow icon"
					className={rotateclass}
				/>
			</h1>

			{open && (
				<div
					className={
						"w-full flex dark:bg-grey p-5 overflow-hidden rounded-bl-xl rounded-br-xl"
					}
				>
					<div className={"text-black dark:text-white text-sm"}>{children}</div>
				</div>
			)}
		</div>
	);
};

export default Accordion;
