"use client";

import React from "react";
import Frame from "./Frame.jsx";

const YouTubeEmbed = ({ youtubeID }) => {
	return (
		<Frame>
			<iframe
				className="video w-full h-[25vw]"
				title="Youtube player"
				sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
				src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}
			></iframe>
		</Frame>
	);
};

export default YouTubeEmbed;
