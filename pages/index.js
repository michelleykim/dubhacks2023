import axios from "axios";
import { useState } from "react";

export default function Home() {
	const [youtubeID, setYoutubeID] = useState("");
	const [id, setId] = useState("");

	const onIdChange = (e) => {
		setId(e.target.value);
	};

	const getYoutubeID = (e) => {
		e.preventDefault();
		let videoID;

		if (id.includes("youtu.be")) {
			videoID = id.split("/").pop();
		} else if (id.includes("youtube.com")) {
			const urlParams = new URLSearchParams(new URL(id).search);
			videoID = urlParams.get("v");
		}

		if (videoID) {
			setYoutubeID(videoID);
			setId("");
		} else {
			console.error("Invalid YouTube URL");
		}
	};

	const getTranscript = async () => {
		const response = await axios.get(`/api/youtube-transcribe/${youtubeID}`);
		console.log(response);
	};

	const testOpenAI = async () => {
		const response = await axios.get("/api/test-chat-completion");
		console.log(response);
	};

	return (
		<div className={`App w-screen h-screen dark`}>
			<div
				className="w-full h-full flex flex-row items-center text-black dark:text-white bg-white dark:bg-black"
				id="main-content"
			>
				<div className="basis-1/2 flex flex-col m-10" id="left-panel">
					<button onClick={testOpenAI}>Test OpenAI</button>
					<button onClick={getTranscript}>Get Transcript</button>

					<form className="dark:bg-zinc p-4 rounded-xl" onSubmit={getYoutubeID}>
						<h1 className="block font-bold">Insert a youtube video URL </h1>
						<div className="flex flex-row justify-between">
							<input
								className="w-11/12 mt-3 dark:bg-grey p-4 rounded-md"
								type="text"
								value={id}
								onChange={onIdChange}
							/>
							<button className="ml-2" type="submit">
								<img
									className="w-12"
									src="/assets/iconSend.svg"
									alt="send icon SVG"
								/>
							</button>
						</div>
					</form>

					<h1 className="font-bold">Youtube embed: </h1>
					<div className="youtube-container">
						<iframe
							className="video"
							title="Youtube player"
							sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
							src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}
						></iframe>
					</div>
				</div>
				<div className="basis-1/2" id="right-panel">
					<h1>CHAT HISTORY HERE</h1>
				</div>
			</div>
		</div>
	);
}
