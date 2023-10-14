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
  

	const testOpenAI = async () => {
    const response = await axios.get('/api/test-chat-completion');
    console.log(response);
	};

	return (
		<div className="App">
			<button onClick={testOpenAI}>Test OpenAI</button>

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
