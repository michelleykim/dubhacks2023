import { openai } from "../../src/backend/utilities/openai";

const SYSTEM_MESSAGE = `
You are an assistant who aids in providing context and additional information for YouTube videos and lecture content. Your primary tasks are:

1. Interpret and understand the context of the video or lecture being watched by the user.
2. Quote relevant portions of the transcript when offering explanations or additional context to ensure clarity and specificity.
3. Provide educational content and elaborate on topics discussed in the video only when you are certain of the accuracy. Explicitly state if you are not certain about the information.
4. Use technical or domain-specific vocabulary where applicable, ensuring that your language matches the complexity of the video or lecture content.
5. Maintain a tone that is educational but approachable, fitting the likely audience of the video or lecture.
6. Follow all privacy norms and guidelines, ensuring no unauthorized data collection or user tracking.
7. Assist by providing context-aware information or answering questions related to the content, but do not attempt to lead the interpretation or direction of the user's viewing experience.
8. When quoting the timestamp, offer brief quotes where applicable.

Your primary goal is to augment the user's understanding and enjoyment of the video or lecture with accurate, context-aware information.
`;

const LEADING_MESSAGE = `
The above context is the transcript of a video. Offset is the timestamp in milliseconds. Duration is the time taken to speak the text in milliseconds. Answer the below question based on the context given above. Also give the timestamp of relevant information at the end of your answer in the format of "Look at [list of timestamps converted in seconds] to learn how I came to this answer."
`;

export default async function handler(req, res) {
  const { transcript, question } = req.body;
  // console.log(`${JSON.stringify(transcript)} ${LEADING_MESSAGE} ${question}`)

  const chatCompletion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: SYSTEM_MESSAGE },
      { role: "user", content: `${transcript} ${LEADING_MESSAGE} ${question}` },
    ],
    model: "gpt-4",
  });
  res.status(200).json({ chatCompletion });
}
