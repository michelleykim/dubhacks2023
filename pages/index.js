import axios from "axios";
import { useState, createContext, useReducer, useEffect } from "react";
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

	useEffect(() => {
		getTranscript();
	}, [youtubeID]);

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
	};

	const testOpenAI = async () => {
		const response = await axios.post("/api/chat-completion", {
			transcript: `[
					{
						"text": "fortran a compiled imperative",
						"duration": 3919,
						"offset": 0
					},
					{
						"text": "programming language famous as the first",
						"duration": 3680,
						"offset": 2000
					},
					{
						"text": "ever high-level language designed for",
						"duration": 4000,
						"offset": 3919
					},
					{
						"text": "humans it was developed in the 1950s at",
						"duration": 4800,
						"offset": 5680
					},
					{
						"text": "ibm by john bakkus a guy who was too",
						"duration": 5281,
						"offset": 7919
					},
					{
						"text": "lazy to write assembly for the ibm 704",
						"duration": 4480,
						"offset": 10480
					},
					{
						"text": "mainframe computer the haters said it",
						"duration": 2960,
						"offset": 13200
					},
					{
						"text": "would never be as performant as",
						"duration": 4399,
						"offset": 14960
					},
					{
						"text": "hand-coded programs but by 1957 formula",
						"duration": 4959,
						"offset": 16160
					},
					{
						"text": "translator became the first computer",
						"duration": 3760,
						"offset": 19359
					},
					{
						"text": "language standard at the time computers",
						"duration": 4080,
						"offset": 21119
					},
					{
						"text": "were extremely rare but fortran was a",
						"duration": 3761,
						"offset": 23119
					},
					{
						"text": "huge technical breakthrough because for",
						"duration": 3361,
						"offset": 25199
					},
					{
						"text": "the first time ever people outside the",
						"duration": 3200,
						"offset": 26880
					},
					{
						"text": "computer science realm could actually",
						"duration": 3360,
						"offset": 28560
					},
					{
						"text": "use a computer most importantly the",
						"duration": 3280,
						"offset": 30080
					},
					{
						"text": "language implemented the first",
						"duration": 3360,
						"offset": 31920
					},
					{
						"text": "optimizing compiler which was able to",
						"duration": 3600,
						"offset": 33360
					},
					{
						"text": "produce machine code just as fast as",
						"duration": 3599,
						"offset": 35280
					},
					{
						"text": "anything coded by hand the language has",
						"duration": 3439,
						"offset": 36960
					},
					{
						"text": "evolved into many different versions",
						"duration": 3360,
						"offset": 38879
					},
					{
						"text": "over the years and is still in use today",
						"duration": 3441,
						"offset": 40399
					},
					{
						"text": "primarily for heavy duty number",
						"duration": 3521,
						"offset": 42239
					},
					{
						"text": "crunching and scientific computing when",
						"duration": 3440,
						"offset": 43840
					},
					{
						"text": "your grandma wrote fortran back in the",
						"duration": 3600,
						"offset": 45760
					},
					{
						"text": "70s she didn't have access to fancy",
						"duration": 3840,
						"offset": 47280
					},
					{
						"text": "tools like editors and terminals and",
						"duration": 3679,
						"offset": 49360
					},
					{
						"text": "instead wrote her code on a punch card",
						"duration": 3759,
						"offset": 51120
					},
					{
						"text": "each card represents one line of code",
						"duration": 3520,
						"offset": 53039
					},
					{
						"text": "and is kept neatly in a stack where it",
						"duration": 3601,
						"offset": 54879
					},
					{
						"text": "can then be fed into a card reader to be",
						"duration": 3761,
						"offset": 56559
					},
					{
						"text": "compiled the modern developer can get",
						"duration": 3280,
						"offset": 58480
					},
					{
						"text": "started by installing the fortran",
						"duration": 4080,
						"offset": 60320
					},
					{
						"text": "compiler then create a file ending in f",
						"duration": 5440,
						"offset": 61760
					},
					{
						"text": "or f95 to specify a certain version like",
						"duration": 5280,
						"offset": 64400
					},
					{
						"text": "fortran 95 use the program keyword to",
						"duration": 4400,
						"offset": 67200
					},
					{
						"text": "give your app a name in older versions",
						"duration": 3759,
						"offset": 69680
					},
					{
						"text": "keywords used all caps because the shift",
						"duration": 3519,
						"offset": 71600
					},
					{
						"text": "key didn't exist on punch card machines",
						"duration": 4080,
						"offset": 73439
					},
					{
						"text": "until the 1970s declare variables by",
						"duration": 4561,
						"offset": 75119
					},
					{
						"text": "starting with a type followed by a name",
						"duration": 4160,
						"offset": 77520
					},
					{
						"text": "and optionally a default value any",
						"duration": 4640,
						"offset": 79680
					},
					{
						"text": "variable names that start with ijklmn",
						"duration": 4079,
						"offset": 81680
					},
					{
						"text": "will automatically be considered",
						"duration": 3520,
						"offset": 84320
					},
					{
						"text": "integers to disable this ancient feature",
						"duration": 3921,
						"offset": 85759
					},
					{
						"text": "use the implicit nun directive at the",
						"duration": 3599,
						"offset": 87840
					},
					{
						"text": "top use the character type to create a",
						"duration": 3600,
						"offset": 89680
					},
					{
						"text": "string by declaring it with a fixed",
						"duration": 3680,
						"offset": 91439
					},
					{
						"text": "maximum length now print that value to",
						"duration": 3760,
						"offset": 93280
					},
					{
						"text": "the standard output using the executable",
						"duration": 4241,
						"offset": 95119
					},
					{
						"text": "statement of print star in addition the",
						"duration": 4240,
						"offset": 97040
					},
					{
						"text": "dimension keyword can be used to create",
						"duration": 3680,
						"offset": 99360
					},
					{
						"text": "an array of numbers and multiple",
						"duration": 3600,
						"offset": 101280
					},
					{
						"text": "dimensions will create a matrix just be",
						"duration": 3520,
						"offset": 103040
					},
					{
						"text": "careful not to allocate too much memory",
						"duration": 3360,
						"offset": 104880
					},
					{
						"text": "because your apple ii only has four",
						"duration": 3440,
						"offset": 106560
					},
					{
						"text": "kilobytes of ram early versions of the",
						"duration": 3440,
						"offset": 108240
					},
					{
						"text": "language didn't perform fine-grained",
						"duration": 3520,
						"offset": 110000
					},
					{
						"text": "memory management but modern versions",
						"duration": 3759,
						"offset": 111680
					},
					{
						"text": "support pointers that can manually",
						"duration": 4160,
						"offset": 113520
					},
					{
						"text": "allocate and de-allocate memory but the",
						"duration": 3761,
						"offset": 115439
					},
					{
						"text": "real killer feature of fortran when it",
						"duration": 3360,
						"offset": 117680
					},
					{
						"text": "came out in the 50s is the ability to",
						"duration": 4080,
						"offset": 119200
					},
					{
						"text": "perform loops perform loose perform",
						"duration": 4480,
						"offset": 121040
					},
					{
						"text": "loose the do and do while loops made it",
						"duration": 4240,
						"offset": 123280
					},
					{
						"text": "relatively easy for anybody to tell a",
						"duration": 3760,
						"offset": 125520
					},
					{
						"text": "computer how to do something multiple",
						"duration": 4000,
						"offset": 127520
					},
					{
						"text": "times on top of that fortran also made",
						"duration": 4400,
						"offset": 129280
					},
					{
						"text": "code reusable with procedures a function",
						"duration": 4160,
						"offset": 131520
					},
					{
						"text": "procedure takes immutable arguments",
						"duration": 3840,
						"offset": 133680
					},
					{
						"text": "performs some kind of calculation then",
						"duration": 3600,
						"offset": 135680
					},
					{
						"text": "returns a value it can be called with",
						"duration": 3359,
						"offset": 137520
					},
					{
						"text": "its name elsewhere in the code a",
						"duration": 3679,
						"offset": 139280
					},
					{
						"text": "subroutine is another type of procedure",
						"duration": 3921,
						"offset": 140879
					},
					{
						"text": "which can take mutable arguments but",
						"duration": 4080,
						"offset": 142959
					},
					{
						"text": "does not provide a return value now use",
						"duration": 3519,
						"offset": 144800
					},
					{
						"text": "your favorite implementation of the",
						"duration": 3120,
						"offset": 147040
					},
					{
						"text": "compiler to convert your code into an",
						"duration": 4161,
						"offset": 148319
					},
					{
						"text": "executable binary this has been fortran",
						"duration": 4000,
						"offset": 150160
					},
					{
						"text": "and 100 seconds let me know if you want",
						"duration": 3280,
						"offset": 152480
					},
					{
						"text": "to see a full tutorial in the comments",
						"duration": 3439,
						"offset": 154160
					},
					{
						"text": "thanks for watching and i will see you",
						"duration": 5040,
						"offset": 155760
					},
					{
						"text": "in the next one",
						"duration": 3201,
						"offset": 157599
					}
				]`,
			question: "Why would someone prefer fortran over cobol?",
		});
		const { chatCompletion } = response.data;
		const { choices } = chatCompletion;
		const { text } = choices[0];
		dispatch("add_qna", {
			question: "test",
			answer: text,
		});
	};

	return (
		<div className={`App w-screen h-screen dark overflow-hidden`}>
			<div
				className="px-[5vw] h-full flex flex-row items-center text-black dark:text-white bg-white dark:bg-black"
				id="main-content"
			>
				<MainContext.Provider value={{ state, dispatch }}>
					<div className="basis-1/2 flex flex-col ml-10 mr-5" id="left-panel">
						{/* <button onClick={testOpenAI}>Test OpenAI</button>
						<button onClick={getTranscript}>Get Transcript</button> */}

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
