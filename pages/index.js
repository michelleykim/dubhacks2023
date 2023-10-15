import axios from "axios";
import { useState, createContext, useReducer } from "react";
import YouTubeEmbed from "../src/frontend/YouTubeEmbed";
import LinkInput from "../src/frontend/LinkInput";
import Transcript from "../src/frontend/Transcript";
import Chat from "../src/frontend/Chat";
import { MainReducer, initialState } from "../src/reducers/MainReducer";
import { MainContext } from "../src/contexts/MainContext";
import PromptInput from "../src/frontend/PromptInput";

export default function Home() {
	const [state, dispatch] = useReducer(MainReducer, initialState);

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
		try {
			const response = await axios.get(`/api/youtube-transcribe/${youtubeID}`);
			dispatch({
				type: "get_transcript",
				payload: response.data.transcript,
			});
		} catch (error) {
			console.error("Error fetching transcript:", error.message);
			dispatch({ type: "error", payload: error.message });
		}
		console.log(state);
	};

	const testOpenAI = async () => {
		const response = await axios.get("/api/test-chat-completion");
		console.log(response);
	};

	return (
		<div className={`App w-screen h-screen dark overflow-hidden`}>
			<div
				className="w-full h-full flex flex-row items-center text-black dark:text-white bg-white dark:bg-black"
				id="main-content"
			>
				<MainContext.Provider value={{ state, dispatch }}>
					<div className="basis-1/2 flex flex-col ml-10 mr-5" id="left-panel">
						<button onClick={testOpenAI}>Test OpenAI</button>
						<button onClick={getTranscript}>Get Transcript</button>

						<LinkInput
							value={id}
							onChange={onIdChange}
							getYoutubeID={getYoutubeID}
						/>

						<br />
						<YouTubeEmbed youtubeID={youtubeID} />
						<br />
						<Transcript />
					</div>
					<div className="basis-1/2 mr-10 ml-5" id="right-panel">
						<Chat />
						<br />
						<PromptInput />
					</div>
				</MainContext.Provider>
			</div>
		</div>
	);
}
