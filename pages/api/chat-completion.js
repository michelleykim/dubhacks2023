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

Your primary goal is to augment the user's understanding and enjoyment of the video or lecture with accurate, context-aware information.
`;

const LEADING_MESSAGE_KIDS = `Hey there, buddy! The words up above come from a video, and they show the time when someone said something. Can you help me answer the next question using what you read? If you find something important, let's write down the times like this: 1:23, 2:34, etc. So, if someone asks how we know, we can say, 'We found it at [1:23, 2:34] in the video! Also explain like I am five who doesn't know much. Don't use any vocabulatory that is too hard for me to understand.`;

const LEADING_MESSAGE = `The text above consists of a transcript from a video, where each line is annotated with a timestamp in seconds next to the spoken content. Please answer the following question based on this transcript. If your answer references any part of the transcript, include those timestamps in a readable format like 1:23, 2:34, etc. at the end of your answer. Example format: 'Refer to [1:23, 2:34] for the source of this information.`;

export default async function handler(req, res) {
  const { transcript, question, isKidsMode } = req.body;

  const chatCompletion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: SYSTEM_MESSAGE },
      { role: "user", content: `${transcript} ${isKidsMode ? LEADING_MESSAGE_KIDS : LEADING_MESSAGE} ${question}` },
    ],
    model: "gpt-4",
  });
  res.status(200).json({ chatCompletion });
}
