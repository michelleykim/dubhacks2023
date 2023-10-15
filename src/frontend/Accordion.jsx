"use client";

import React from "react";
import { useState } from "react";

const Accordion = ({ heading, children }) => {
	const [open, setOpen] = useState(false);

	return (
		<div className="w-full" onClick={() => setOpen(!open)}>
			<h1
				className={
					"w-full flex dark:bg-zinc-800 p-5 rounded-tl-xl rounded-tr-xl font-semibold text-lg"
				}
			>
				{heading}
			</h1>

			{open && (
				<div
					className={
						"w-full flex dark:bg-grey p-5 overflow-hidden rounded-bl-xl rounded-br-xl"
					}
				>
					<p className={"overflow-scroll text-black dark:text-white text-sm"}>
						{children}
					</p>
				</div>
			)}
		</div>
	);
};

export default Accordion;
