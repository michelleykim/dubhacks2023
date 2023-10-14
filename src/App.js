import "./App.css";
import openai from "./utilities/openai";
import { useState } from "react";

function App() {
	const [youtubeID, setYoutubeID] = useState("");
	const [id, setId] = useState("");

	const onIdChange = (e) => {
		setId(e.target.value);
	};

	const getYoutubeID = (e) => {
		e.preventDefault();
		let url;
		if (id.includes("youtu.be")) {
			let indexStart = id.lastIndexOf("/") + 1;
			url = id.slice(indexStart);
		} else {
			let indexStart = id.indexOf("v=") + 2;
			let temp = id.slice(indexStart);
			let indexEnd = temp.indexOf("&");
			url = temp.slice(0, indexEnd);
		}
		setYoutubeID(url);
		setId("");
	};

	const test = async () => {
		const chatCompletion = await openai.chat.completions.create({
			messages: [{ role: "user", content: "Say this is a test" }],
			model: "gpt-3.5-turbo",
		});

		alert(chatCompletion.choices);
	};
	return (
		<div className="App">
			<button onClick={test}>Test OpenAI</button>

			<form onSubmit={getYoutubeID}>
				<input type="text" value={id} onChange={onIdChange} />
				<button type="submit">Submit</button>
			</form>

			<h1>Youtube embed: </h1>
			<div className="youtube-container">
				<iframe
					className="video"
					title="Youtube player"
					sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
					src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}
				></iframe>
			</div>
		</div>
	);
}

export default App;
