import axios from "axios";
import { useState, createContext, useReducer, useEffect } from "react";
import YouTubeEmbed from "../src/frontend/YouTubeEmbed";
import LinkInput from "../src/frontend/LinkInput";
import Transcript from "../src/frontend/Transcript";
import Chat from "../src/frontend/Chat";
import { MainReducer, initialState } from "../src/reducers/MainReducer";
import { MainContext } from "../src/contexts/MainContext";
import PromptInput from "../src/frontend/PromptInput";
import { useSearchParams } from "next/navigation";

export default function Home() {
	const [state, dispatch] = useReducer(MainReducer, initialState);
	const [id, setId] = useState("");
	const [youtubeID, setYoutubeID] = useState("");
	const searchParams = useSearchParams()

	useEffect(() => {
		getTranscript();
	}, [youtubeID]);


	const onIdChange = (e) => {
		setId(e.target.value);
	}

	const parseYoutubeID = (url) => {
		if (url.includes("youtu.be")) {
			return url.split("/").pop();
		}
		const urlParams = new URLSearchParams(new URL(url).search);
		return urlParams.get("v");
	}


	const getYoutubeID = (e) => {
		e.preventDefault();

		const videoID = parseYoutubeID(id);
	  
		if (videoID) {
		  setYoutubeID(videoID);
		  setId("");
		} else {
		  console.error("Invalid YouTube URL");
		}
	  };
	  
	  useEffect(() => {
		if (searchParams.has("link")) {
		  const link = searchParams.get("link");
		  setYoutubeID(parseYoutubeID(link));
		  setId("");
		}
	  }, [searchParams]);
	  

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
	};

	return (
		<>
			<div className={`App w-screen h-screen static dark overflow-hidden`}>
				<div
					className="px-[5vw] h-full flex flex-row items-center text-black dark:text-white bg-white dark:bg-dark-grey"
					id="main-content"
				>
					<MainContext.Provider value={{ state, dispatch }}>
						<div
							className="basis-1/2 flex flex-col ml-10 mr-5 z-10"
							id="left-panel"
						>
							{/* <button onClick={testOpenAI}>Test OpenAI</button>
						<button onClick={getTranscript}>Get Transcript</button> */}

							<LinkInput
								value={id}
								onChange={onIdChange}
								onSubmit={getYoutubeID}
							/>

							<br />
							<YouTubeEmbed youtubeID={youtubeID} />
							<br />
							<Transcript />
						</div>
						<div className="basis-1/2 mr-10 ml-5 z-10" id="right-panel">
							<Chat />
							<br />
							<PromptInput />
						</div>
					</MainContext.Provider>
				</div>
			</div>
			<img className="absolute bottom-0 z-0" src="assets/background.png"></img>
		</>
	);
}
