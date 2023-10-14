import "./App.css";
import openai from "./utilities/openai";
import { useState } from "react";

function App() {
	const [youtubeID] = useState("jeKFPHa9Kec?si=fAHuxJi46pqYoX4x");

	const test = async () => {
		const chatCompletion = await openai.chat.completions.create({
			messages: [{ role: "user", content: "Say this is a test" }],
			model: "gpt-3.5-turbo",
		});

		alert(chatCompletion.choices);
	};
	return (
		<>
			<button onClick={test}>Test OpenAI</button>
			<div className="App">
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
		</>
	);
}

export default App;
