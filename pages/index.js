import axios from "axios";
import { useState } from "react";
import Frame from "../src/frontend/Frame";
import YouTubeEmbed from "../src/frontend/YouTubeEmbed";
import LinkInput from "../src/frontend/LinkInput";

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

          <LinkInput
            id={id}
            onIdChange={onIdChange}
            getYoutubeID={getYoutubeID}
          />

          <br />
          <YouTubeEmbed youtubeID={youtubeID} />
        </div>
        <div className="basis-1/2" id="right-panel">
          <h1>CHAT HISTORY HERE</h1>
        </div>
      </div>
    </div>
  );
}
